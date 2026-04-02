import React from "react"
import { motion } from "framer-motion"
import { cn } from "../../lib/utils"
import { Card, CardContent } from "./Card"
import { Badge } from "./Badge"
import { CheckCircle, Clock, Circle } from "lucide-react"
import { useTranslation } from "react-i18next"

const getStatusConfig = (status) => {
  const configs = {
    completed: {
      progressColor: "bg-green-600",
      borderColor: "border-green-600/20",
      badgeBg: "bg-green-100",
      badgeText: "text-green-800"
    },
    current: {
      progressColor: "bg-blue-600",
      borderColor: "border-blue-600/20",
      badgeBg: "bg-blue-100",
      badgeText: "text-blue-800"
    },
    upcoming: {
      progressColor: "bg-gray-400",
      borderColor: "border-gray-200",
      badgeBg: "bg-gray-100",
      badgeText: "text-gray-600"
    }
  }
  
  return configs[status || "upcoming"]
}

const getStatusIcon = (status) => {
  switch (status) {
    case "completed":
      return CheckCircle
    case "current":
      return Clock
    default:
      return Circle
  }
}

export function Timeline({ items, className }) {
  const { t } = useTranslation()
  if (!items || items.length === 0) {
    return (
      <div className={cn("w-full max-w-4xl mx-auto px-4 sm:px-6 py-8", className)}>
        <p className="text-center text-gray-500">{t('timeline.empty', 'Aucun événement à afficher')}</p>
      </div>
    )
  }

  return (
    <section 
      className={cn("w-full max-w-4xl mx-auto px-4 sm:px-6 py-8", className)}
      role="list"
      aria-label="Timeline of events and milestones"
    >
      <div className="relative">
        <div 
          className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gray-200" 
          aria-hidden="true"
        />
        
        <motion.div
          className="absolute left-4 sm:left-6 top-0 w-px bg-primary-600 origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ 
            scaleY: 1,
            transition: {
              duration: 1.2,
              ease: "easeOut",
              delay: 0.2
            }
          }}
          viewport={{ once: true }}
          aria-hidden="true"
        />

        <div className="space-y-8 sm:space-y-12 relative">
          {items.map((item, index) => {
            const config = getStatusConfig(item.status)
            const IconComponent = getStatusIcon(item.status)
            
            return (
              <motion.div
                key={index}
                className="relative group lg:pl-4"
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }
                }}
                viewport={{ once: true, margin: "-30px" }}
                role="listitem"
                aria-label={`Timeline item ${index + 1}: ${item.title}`}
              >
                <div className="flex items-start gap-4 sm:gap-6 pt-2">
                  <div className="relative flex-shrink-0">
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      tabIndex={0}
                      role="img"
                      aria-label={`Icon for ${item.title}`}
                    >
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white bg-white shadow-md relative z-10">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={`${item.title} icon`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-50 flex items-center justify-center">
                            <IconComponent 
                              className="w-6 h-6 text-gray-500" 
                              aria-hidden="true"
                            />
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    className="flex-1 min-w-0"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className={cn(
                      "border transition-all duration-300 hover:shadow-lg relative",
                      "bg-white/90 backdrop-blur-sm",
                      config.borderColor,
                      "group-hover:border-primary/30"
                    )}>
                      <CardContent className="p-5 sm:p-6">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3">
                          <div className="flex-1 min-w-0">
                            <motion.h3 
                              className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors duration-300"
                              layoutId={`title-${index}`}
                            >
                              {item.title}
                            </motion.h3>
                            
                            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 font-medium">
                              {item.category && (
                                <span className={cn(config.badgeText)}>{item.category}</span>
                              )}
                              {item.category && item.date && (
                                <span className="w-1 h-1 bg-gray-400 rounded-full" aria-hidden="true" />
                              )}
                              {item.date && (
                                <time dateTime={item.date}>{item.date}</time>
                              )}
                            </div>
                          </div>
                          
                          <Badge 
                            variant="outline"
                            className={cn(
                              "w-fit text-xs font-bold border rounded-full px-3 shadow-none",
                              config.badgeBg,
                              config.badgeText,
                              "border-transparent"
                            )}
                            aria-label={`Status: ${item.status || "upcoming"}`}
                          >
                            {item.status === 'completed' ? t('timeline.status_completed', 'Complété') : item.status === 'current' ? t('timeline.status_current', 'En cours') : t('timeline.status_upcoming', 'À venir')}
                          </Badge>
                        </div>

                        <motion.p 
                          className="text-base sm:text-lg text-gray-600 leading-relaxed mb-5"
                          initial={{ opacity: 0.8 }}
                          whileHover={{ opacity: 1 }}
                        >
                          {item.description}
                        </motion.p>

                        <div 
                          className="h-1.5 bg-gray-100 rounded-full overflow-hidden"
                          role="progressbar"
                          aria-valuenow={item.status === "completed" ? 100 : item.status === "current" ? 65 : 25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-label={`Progress for ${item.title}`}
                        >
                          <motion.div
                            className={cn("h-full rounded-full", config.progressColor)}
                            initial={{ width: 0 }}
                            animate={{ 
                              width: item.status === "completed" ? "100%" : 
                                     item.status === "current" ? "65%" : "25%"
                            }}
                            transition={{ 
                              duration: 1.2, 
                              delay: index * 0.2 + 0.8,
                              ease: "easeOut"
                            }}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="absolute left-4 sm:left-6 -bottom-6 transform -translate-x-1/2"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ 
            opacity: 1, 
            scale: 1,
            transition: {
              duration: 0.4,
              delay: items.length * 0.1 + 0.3,
              type: "spring",
              stiffness: 400
            }
          }}
          viewport={{ once: true }}
          aria-hidden="true"
        >
          <div className="w-3 h-3 bg-primary-600 rounded-full shadow-sm" />
        </motion.div>
      </div>
    </section>
  )
} 
