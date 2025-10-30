import { ClipboardList, Users, FileText } from "lucide-react";

const services = [
  {
    title: "Queue Assistance",
    desc: "Stand in lines for registration, billing, or consultations",
    icon: ClipboardList,
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "Patient Escort",
    desc: "Accompany patients to tests, procedures, or appointments",
    icon: Users,
    gradient: "from-healpers-coral to-orange-400",
  },
  {
    title: "Report Collection",
    desc: "Fetch lab reports, X-rays, and medical documents",
    icon: FileText,
    gradient: "from-healpers-teal to-green-400",
  },
];

const HomeServices = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            How Healpers assist you during hospital visits
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div key={i} className="card-glass p-8 rounded-3xl hover:scale-105 transition-transform">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
