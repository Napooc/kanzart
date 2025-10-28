import { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, Package, Phone, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingNav } from "@/components/FloatingNav";
import { navItems } from "@/config/navigation";
import confetti from "canvas-confetti";

const OrderSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderData, items, total } = location.state || {};

  useEffect(() => {
    if (!orderData) {
      navigate("/");
      return;
    }

    // Trigger confetti
    const duration = 3000;
    const animationEnd = Date.now() + duration;

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        particleCount,
        startVelocity: 30,
        spread: 360,
        origin: {
          x: randomInRange(0.1, 0.3),
          y: Math.random() - 0.2,
        },
        colors: ["#9b87f5", "#7E69AB", "#6E59A5", "#D6BCFA"],
      });
      confetti({
        particleCount,
        startVelocity: 30,
        spread: 360,
        origin: {
          x: randomInRange(0.7, 0.9),
          y: Math.random() - 0.2,
        },
        colors: ["#9b87f5", "#7E69AB", "#6E59A5", "#D6BCFA"],
      });
    }, 250);

    return () => clearInterval(interval);
  }, [orderData, navigate]);

  if (!orderData) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/10">
      <FloatingNav navItems={navItems} />

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="inline-flex p-6 rounded-full bg-green-500/10 mb-6">
              <CheckCircle2 className="h-20 w-20 text-green-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-gradient">
              Commande Confirmée !
            </h1>
            <p className="text-lg text-muted-foreground">
              Merci pour votre confiance, {orderData.fullName}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Order Details */}
            <div className="elegant-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <Package className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Détails de la Commande</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Contact</p>
                  <p className="font-semibold">{orderData.phone}</p>
                  {orderData.email && (
                    <p className="text-sm text-muted-foreground">{orderData.email}</p>
                  )}
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Livraison à</p>
                  <p className="font-semibold">{orderData.city}</p>
                  <p className="text-sm text-muted-foreground">{orderData.address}</p>
                </div>
              </div>

              <div className="space-y-3 pb-4 border-b">
                {items?.map((item: any) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>
                      {item.quantity}x {item.title}
                    </span>
                    <span className="font-semibold">{item.totalPrice.toLocaleString()} MAD</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold">Total</span>
                <span className="text-3xl font-bold text-gradient">
                  {total?.toLocaleString()} MAD
                </span>
              </div>

              <div className="mt-6 p-4 rounded-lg bg-green-500/5 border border-green-500/20">
                <p className="text-sm text-center font-medium">
                  💳 Paiement à la livraison (Cash)
                </p>
              </div>
            </div>

            {/* Next Steps */}
            <div className="elegant-card p-8">
              <h3 className="text-xl font-bold mb-4">Prochaines Étapes</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    1
                  </div>
                  <div>
                    <p className="font-semibold">Confirmation par Téléphone</p>
                    <p className="text-sm text-muted-foreground">
                      Notre équipe vous contactera dans les 24h pour confirmer votre commande
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    2
                  </div>
                  <div>
                    <p className="font-semibold">Préparation & Expédition</p>
                    <p className="text-sm text-muted-foreground">
                      Votre œuvre sera soigneusement emballée et expédiée
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    3
                  </div>
                  <div>
                    <p className="font-semibold">Livraison sous 5-7 jours</p>
                    <p className="text-sm text-muted-foreground">
                      Recevez votre commande et payez à la livraison
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="elegant-card p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <div className="flex items-center gap-3 mb-3">
                <Phone className="h-5 w-5 text-primary" />
                <h3 className="font-bold">Besoin d'Aide ?</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Notre service client est disponible pour répondre à vos questions
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" asChild>
                  <a href="tel:+212600000000">
                    <Phone className="h-4 w-4 mr-2" />
                    Appeler
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a 
                    href="https://wa.me/212600000000" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="flex-1 h-12 gradient-primary">
                <Link to="/">
                  <Home className="h-4 w-4 mr-2" />
                  Retour à l'Accueil
                </Link>
              </Button>
              <Button asChild variant="outline" className="flex-1 h-12">
                <Link to="/nouveaute">
                  Continuer mes Achats
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
