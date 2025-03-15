
import PricingCard from "../components/PricingCard";

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Monthly",
      price: "R$120",
      period: "/month",
      description: "Perfect for short-term usage with all premium features included.",
      features: [
        "Undetectable bypass technology",
        "External cheat included",
        "24/7 customer support",
        "Regular updates",
        "Access to user dashboard",
      ],
      highlighted: false,
    },
    {
      title: "Quarterly",
      price: "R$220",
      period: "/3 months",
      description: "Our most popular plan with the best balance of value and flexibility.",
      features: [
        "Undetectable bypass technology",
        "External cheat included",
        "24/7 priority customer support",
        "Regular updates",
        "Access to user dashboard",
        "Save R$140 compared to monthly",
      ],
      highlighted: true,
    },
    {
      title: "Lifetime",
      price: "R$330",
      period: "one-time",
      description: "Ultimate value with a one-time payment for permanent access.",
      features: [
        "Undetectable bypass technology",
        "External cheat included",
        "24/7 VIP customer support",
        "Lifetime updates",
        "Access to user dashboard",
        "Early access to new features",
        "Exclusive lifetime member benefits",
      ],
      highlighted: false,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-xl mb-6 animate-fade-down">Simple, Transparent Pricing</h1>
            <p className="text-muted-foreground text-lg mb-8 animate-fade-down" style={{ animationDelay: "100ms" }}>
              Choose the plan that works best for you. All plans include our premium bypass technology and external cheat features.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                title={plan.title}
                price={plan.price}
                period={plan.period}
                description={plan.description}
                features={plan.features}
                highlighted={plan.highlighted}
              />
            ))}
          </div>

          <div className="mt-16 p-8 border border-border rounded-xl bg-secondary/50">
            <h3 className="font-semibold mb-4">All Plans Include:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                <span className="text-sm">Undetectable bypass technology</span>
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                <span className="text-sm">Complete external cheat suite</span>
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                <span className="text-sm">Regular software updates</span>
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                <span className="text-sm">Dedicated customer support</span>
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                <span className="text-sm">Access to user dashboard</span>
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                <span className="text-sm">Compatibility with latest game versions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Find answers to common questions about our plans and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card border border-border p-6 rounded-xl">
              <h3 className="font-semibold mb-2">How does the billing work?</h3>
              <p className="text-sm text-muted-foreground">
                All plans are charged upfront for the selected period. Monthly and quarterly plans will automatically renew unless canceled.
              </p>
            </div>
            <div className="bg-card border border-border p-6 rounded-xl">
              <h3 className="font-semibold mb-2">Can I upgrade my plan later?</h3>
              <p className="text-sm text-muted-foreground">
                Yes, you can upgrade from monthly to quarterly or lifetime at any time. We'll apply a prorated credit for your remaining time.
              </p>
            </div>
            <div className="bg-card border border-border p-6 rounded-xl">
              <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-sm text-muted-foreground">
                We accept major credit/debit cards, cryptocurrency (Bitcoin, Ethereum), and select alternative payment methods.
              </p>
            </div>
            <div className="bg-card border border-border p-6 rounded-xl">
              <h3 className="font-semibold mb-2">Do you offer refunds?</h3>
              <p className="text-sm text-muted-foreground">
                We offer a 24-hour money-back guarantee if you experience technical issues that our support team cannot resolve.
              </p>
            </div>
            <div className="bg-card border border-border p-6 rounded-xl">
              <h3 className="font-semibold mb-2">What happens when my subscription ends?</h3>
              <p className="text-sm text-muted-foreground">
                When your subscription ends, access to the bypass and external cheat will be deactivated until renewal.
              </p>
            </div>
            <div className="bg-card border border-border p-6 rounded-xl">
              <h3 className="font-semibold mb-2">How quickly can I access the software after purchase?</h3>
              <p className="text-sm text-muted-foreground">
                Access is provided immediately after successful payment. You'll receive download instructions via email.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
