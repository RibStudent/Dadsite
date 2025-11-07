import { motion } from "framer-motion";
import { Award, Trophy, Star, Users, Building, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const achievements = [
  {
    icon: <Trophy className="h-8 w-8" />,
    title: "AIPM Project Director of the Year 2014",
    description: "High Commendation for outstanding leadership on $904M Wiggins Island Rail Project",
    highlight: true,
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Chartered Engineer (CEng)",
    description: "Institution of Civil Engineers (UK) since 2002",
  },
  {
    icon: <Star className="h-8 w-8" />,
    title: "RPEQ #8668",
    description: "Registered Professional Engineer of Queensland since 2007",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "University Lecturer",
    description: "Part Time Lecturing Fellow at Bond University, Gold Coast",
  },
  {
    icon: <Building className="h-8 w-8" />,
    title: "Zero Harm Delivery",
    description: "Consistent safety excellence on $300M+ Inland Rail package",
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "International Experience",
    description: "Major projects across UK, Middle East, Asia & Australia",
  },
];

export default function AchievementsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Awards & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Industry-recognised excellence in project delivery, leadership, and innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full ${achievement.highlight ? 'border-primary shadow-lg' : ''}`}>
                <CardContent className="p-6">
                  <div className={`inline-flex p-3 rounded-lg mb-4 ${
                    achievement.highlight 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted'
                  }`}>
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}