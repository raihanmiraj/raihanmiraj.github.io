import ProjectCard from "@/components/project-card"

export default function ProjectsSection() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProjectCard
        title="Flight Booking System"
        description="Integrated with Amadeus and Flight.io APIs for real-time flight data and bookings."
        tags={["React", "Laravel", "API"]}
        gradientFrom="from-blue-600"
        gradientTo="to-[#0A69DC]"
      />
      <ProjectCard
        title="Cargo Management System"
        description="Automated cargo pricing and service modules with DHL API integration."
        tags={["Laravel", "MySQL", "DHL API"]}
        gradientFrom="from-purple-600"
        gradientTo="to-[#0A69DC]"
      />
      <ProjectCard
        title="Healthcare Consultation App"
        description="React Native app with real-time features for doctor-patient consultation."
        tags={["React Native", "Firebase", "Realtime"]}
        gradientFrom="from-cyan-600"
        gradientTo="to-[#0A69DC]"
      />
      <ProjectCard
        title="Online Voting System"
        description="Secure voting system plugin for Rupali Bank Ltd. using Socket.IO."
        tags={["JavaScript", "Socket.IO", "Security"]}
        gradientFrom="from-green-600"
        gradientTo="to-[#0A69DC]"
      />
      <ProjectCard
        title="School Management System"
        description="Comprehensive system with multi-role authentication and management."
        tags={["Laravel", "React", "MySQL"]}
        gradientFrom="from-yellow-600"
        gradientTo="to-[#0A69DC]"
      />
      <ProjectCard
        title="Video Conferencing App"
        description="Custom video conferencing solution using WebRTC and Socket.IO."
        tags={["JavaScript", "Socket.IO", "WebRTC"]}
        gradientFrom="from-red-600"
        gradientTo="to-[#0A69DC]"
      />
    </div>
  )
}
