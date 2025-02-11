import { motion } from "framer-motion"
import { Edit2, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Link } from "wouter"

export const statusColors = {
  "Not Started": "bg-yellow-100 text-yellow-800",
  "In Progress": "bg-blue-100 text-blue-800",
  Completed: "bg-green-100 text-green-800",
}

export const levelColors = {
  Easy: "bg-green-100 text-green-800",
  Medium: "bg-yellow-100 text-yellow-800",
  Difficult: "bg-red-100 text-red-800",
}

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tag: string;
    status: keyof typeof statusColors;
    level: keyof typeof levelColors;
  };
  onEdit: () => void;
  onDelete: () => void;
}

export default function ProjectCard({ project, onEdit, onDelete }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
          <Badge variant="outline">{project.tag}</Badge>
        </div>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex space-x-2 mb-4">
          <Badge className={statusColors[project.status]}>{project.status}</Badge>
          <Badge className={levelColors[project.level]}>{project.level}</Badge>
        </div>
        <div className="flex justify-between items-center">
          <Link href={`/project/${encodeURIComponent(project.title)}`}>
            <Button variant="outline">View Details</Button>
          </Link>
          <div className="space-x-2">
            <Button variant="ghost" size="icon" onClick={onEdit}>
              <Edit2 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={onDelete}>
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
