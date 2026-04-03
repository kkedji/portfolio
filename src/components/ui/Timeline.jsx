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
      progressColor: "bg-emerald-500",
      borderColor: "border-emerald-500/20",
      badgeBg: "bg-emerald-500/10",
      badgeText: "text-emerald-400"
    },
    current: {
      progressColor: "bg-blue-500",
      borderColor: "border-blue-500/20",
      badgeBg: "bg-blue-500/10",
      badgeText: "text-blue-400"
    },
    upcoming: {
      progressColor: "bg-slate-500",
      borderColor: "border-white/10",
      badgeBg: "bg-white/5",
      badgeText: "text-slate-400"
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
        <p className="text-center text-slate-500">{t('timeline.empty', 'Aucun événement à afficher')}</p>
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
          className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-white/10" 
          aria-hidden="true"
        />
        
        <motion.div
          className="absolute left-4 sm:left-6 top-0 w-px bg-blue-500 origin-top"
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
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 bg-slate-900 shadow-xl relative z-10">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={`${item.title} icon`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full bg-white/5 flex items-center justify-center">
                            <IconComponent 
                              className={cn("w-6 h-6", config.badgeText)} 
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
                      "glass-card border-white/10 transition-all duration-300 hover:bg-white/10 group-hover:border-blue-400/30 shadow-2xl"
                    )}>
                      <CardContent className="p-5 sm:p-6">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3">
                          <div className="flex-1 min-w-0">
                            <motion.h3 
                              className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300"
                              layoutId={`title-${index}`}
                            >
                              {item.title}
                            </motion.h3>
                            
                            <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400 font-medium">
                              {item.category && (
                                <span className={cn(config.badgeText)}>{item.category}</span>
                              )}
                              {item.category && item.date && (
                                <span className="w-1 h-1 bg-white/20 rounded-full" aria-hidden="true" />
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
                          className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-6"
                          initial={{ opacity: 0.9 }}
                        >
                          {item.description}
                        </motion.p>

                        <div 
                          className="h-1.5 bg-white/5 rounded-full overflow-hidden"
                          role="progressbar"
                          aria-valuenow={item.status === "completed" ? 100 : item.status === "current" ? 65 : 25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-label={`Progress for ${item.title}`}
                        >
                          <motion.div
                            className={cn("h-full rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]", config.progressColor)}
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
