
import { Shield, Zap, Eye, Lock, Code, Headphones, RefreshCw, LayoutDashboard } from "lucide-react";
import FeatureCard from "../components/FeatureCard";

const Features = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-xl mb-6 animate-fade-down">Advanced Features</h1>
            <p className="text-muted-foreground text-lg mb-8 animate-fade-down" style={{ animationDelay: "100ms" }}>
              Our solution combines cutting-edge bypass technology with powerful external cheat capabilities for an unparalleled gaming experience.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">Core Technology</h2>
            <p className="text-muted-foreground">
              The foundation of our solution is built on these powerful features that ensure undetectability and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={Shield}
              title="Undetectable Bypass"
              description="Our proprietary bypass technology remains completely invisible to all anti-cheat systems, with multiple layers of protection."
            />
            <FeatureCard 
              icon={Zap}
              title="Performance Optimized"
              description="Engineered for minimal system impact, maintaining your game's performance while active, with negligible resource usage."
            />
            <FeatureCard 
              icon={Eye}
              title="External Cheat Suite"
              description="Comprehensive external cheat features included with all plans for enhanced gameplay and competitive advantage."
            />
            <FeatureCard 
              icon={Lock}
              title="Secure Architecture"
              description="Built with security-first design to protect your account and system while providing powerful features."
            />
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">Additional Features</h2>
            <p className="text-muted-foreground">
              Beyond our core technology, we provide these additional benefits to enhance your experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={Code}
              title="Regular Updates"
              description="Continuous updates ensure compatibility with game changes and introduce new features and improvements."
            />
            <FeatureCard 
              icon={Headphones}
              title="Premium Support"
              description="Access to our dedicated support team for quick resolution of any issues or questions you may have."
            />
            <FeatureCard 
              icon={RefreshCw}
              title="Seamless Integration"
              description="Easy setup process with no complicated configuration required - just install and play."
            />
            <FeatureCard 
              icon={LayoutDashboard}
              title="User Dashboard"
              description="Access your subscription details, download updates, and manage your account through our intuitive dashboard."
            />
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">Technical Specifications</h2>
            <p className="text-muted-foreground">
              Our solution is built with the latest technology to ensure compatibility and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-border rounded-xl p-8">
              <h3 className="font-semibold mb-4">System Requirements</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <div>
                    <span className="font-medium text-sm">Operating System:</span>
                    <p className="text-sm text-muted-foreground">Windows 10/11 (64-bit)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <div>
                    <span className="font-medium text-sm">Processor:</span>
                    <p className="text-sm text-muted-foreground">Intel Core i3/AMD Ryzen 3 or better</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <div>
                    <span className="font-medium text-sm">Memory:</span>
                    <p className="text-sm text-muted-foreground">4 GB RAM minimum (8 GB recommended)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <div>
                    <span className="font-medium text-sm">Graphics:</span>
                    <p className="text-sm text-muted-foreground">DirectX 11 compatible</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <div>
                    <span className="font-medium text-sm">Storage:</span>
                    <p className="text-sm text-muted-foreground">100 MB of free space</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="border border-border rounded-xl p-8">
              <h3 className="font-semibold mb-4">External Cheat Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <div>
                    <span className="font-medium text-sm">ESP Functionality:</span>
                    <p className="text-sm text-muted-foreground">Player ESP, Item ESP, Distance indicators</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <div>
                    <span className="font-medium text-sm">Aim Assistance:</span>
                    <p className="text-sm text-muted-foreground">Customizable aim settings and smoothing</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <div>
                    <span className="font-medium text-sm">Visual Enhancements:</span>
                    <p className="text-sm text-muted-foreground">Adjustable visual settings for optimal visibility</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <div>
                    <span className="font-medium text-sm">Customization:</span>
                    <p className="text-sm text-muted-foreground">Full customization of all features via intuitive menu</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <div>
                    <span className="font-medium text-sm">Updates:</span>
                    <p className="text-sm text-muted-foreground">Regular feature updates and compatibility patches</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
