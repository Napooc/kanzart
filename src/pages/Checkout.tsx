import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { FloatingNav } from "@/components/FloatingNav";
import { FooterTaped } from "@/components/FooterTaped";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { navItems } from "@/config/navigation";
import { MapPin, Phone, User, Mail, Package, CreditCard, CheckCircle2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";

const checkoutSchema = z.object({
  fullName: z.string().min(3, "Le nom doit contenir au moins 3 caractères").max(100),
  phone: z.string().regex(/^(\+212|0)[5-7]\d{8}$/, "Numéro de téléphone marocain invalide"),
  email: z.string().email("Email invalide").optional().or(z.literal("")),
  city: z.string().min(2, "Ville requise").max(100),
  address: z.string().min(10, "Adresse complète requise").max(500),
  notes: z.string().max(500).optional(),
});

const moroccanCities = [
  "Casablanca", "Rabat", "Fès", "Marrakech", "Tanger", "Agadir", "Meknès", 
  "Oujda", "Kenitra", "Tétouan", "Safi", "El Jadida", "Nador", "Beni Mellal"
];

const Checkout = () => {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    address: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (items.length === 0) {
    navigate("/");
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const validatedData = checkoutSchema.parse(formData);
      
      // Simulate order processing
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Clear cart and show success
      clearCart();
      
      toast({
        title: "✨ Commande confirmée !",
        description: "Nous vous contacterons dans les 24h pour confirmer",
        duration: 5000,
      });

      navigate("/order-success", { 
        state: { 
          orderData: validatedData, 
          items, 
          total: totalPrice 
        } 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
      }
      toast({
        title: "Erreur",
        description: "Veuillez vérifier tous les champs",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const deliveryFee = totalPrice >= 500 ? 0 : 50;
  const finalTotal = totalPrice + deliveryFee;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/10">
      <FloatingNav navItems={navItems} />

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-gradient">
              Finaliser la Commande
            </h1>
            <p className="text-muted-foreground text-lg">
              Paiement à la livraison • Livraison partout au Maroc
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Order Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="elegant-card p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-full bg-primary/10">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-bold">Informations Personnelles</h2>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="fullName">Nom Complet *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Mohammed Alami"
                        className={errors.fullName ? "border-destructive" : ""}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-destructive mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Téléphone *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="0612345678"
                          className={errors.phone ? "border-destructive" : ""}
                        />
                        {errors.phone && (
                          <p className="text-xs text-destructive mt-1">{errors.phone}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="email">Email (optionnel)</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="exemple@email.com"
                          className={errors.email ? "border-destructive" : ""}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Delivery Address */}
                <div className="elegant-card p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-full bg-accent/10">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <h2 className="text-xl font-bold">Adresse de Livraison</h2>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="city">Ville *</Label>
                      <select
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className={`flex h-10 w-full rounded-md border ${
                          errors.city ? "border-destructive" : "border-input"
                        } bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring`}
                      >
                        <option value="">Sélectionnez une ville</option>
                        {moroccanCities.map(city => (
                          <option key={city} value={city}>{city}</option>
                        ))}
                      </select>
                      {errors.city && (
                        <p className="text-xs text-destructive mt-1">{errors.city}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="address">Adresse Complète *</Label>
                      <Textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="N° appartement, rue, quartier..."
                        rows={3}
                        className={errors.address ? "border-destructive" : ""}
                      />
                      {errors.address && (
                        <p className="text-xs text-destructive mt-1">{errors.address}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="notes">Notes (optionnel)</Label>
                      <Textarea
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Instructions spéciales pour la livraison..."
                        rows={2}
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="elegant-card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-full bg-green-500/10">
                      <CreditCard className="h-5 w-5 text-green-500" />
                    </div>
                    <h2 className="text-xl font-bold">Mode de Paiement</h2>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-green-500/5 border border-green-500/20">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                    <div>
                      <p className="font-semibold">Paiement à la Livraison</p>
                      <p className="text-sm text-muted-foreground">
                        Payez en espèces lors de la réception
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 text-lg font-bold gradient-primary hover:opacity-90 transition-all"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Package className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    "Confirmer la Commande"
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="elegant-card p-6 sticky top-28">
                <h2 className="text-xl font-bold mb-6">Résumé de Commande</h2>

                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-3 pb-4 border-b">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm truncate">{item.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {item.dimensionLabel} • {item.frameName}
                        </p>
                        <p className="text-sm font-bold text-accent mt-1">
                          {item.quantity} x {(item.totalPrice / item.quantity).toLocaleString()} MAD
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Sous-total</span>
                    <span className="font-semibold">{totalPrice.toLocaleString()} MAD</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Livraison</span>
                    <span className={`font-semibold ${deliveryFee === 0 ? "text-green-500" : ""}`}>
                      {deliveryFee === 0 ? "GRATUIT" : `${deliveryFee} MAD`}
                    </span>
                  </div>
                  {totalPrice < 500 && (
                    <p className="text-xs text-muted-foreground">
                      Livraison gratuite à partir de 500 MAD
                    </p>
                  )}
                  <div className="h-px bg-border my-3" />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-gradient text-2xl">{finalTotal.toLocaleString()} MAD</span>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <p className="text-xs text-center">
                    🚚 Livraison sous 5-7 jours ouvrables partout au Maroc
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <FooterTaped />
    </div>
  );
};

export default Checkout;
