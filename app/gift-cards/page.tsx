"use client";

import { useState } from "react";
import PageHeader from "@/components/ui/PageHeader";
import GiftCard from "@/components/ui/GiftCard";
import Button from "@/components/ui/Button";
import { Gift, ShieldCheck, Send } from "lucide-react";

export default function GiftCardsPage() {
  const [selectedDesign, setSelectedDesign] = useState<"classic" | "glossy" | "noir" | "bridal">("classic");
  const [selectedAmount, setSelectedAmount] = useState<string>("₹5,000");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [deliveryType, setDeliveryType] = useState<"digital" | "physical">("digital");
  const [occasion, setOccasion] = useState<string>("Birthday");
  const [recipientName, setRecipientName] = useState<string>("");
  const [recipientEmail, setRecipientEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isOrdered, setIsOrdered] = useState<boolean>(false);

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Gift Cards", path: "/gift-cards" },
  ];

  const designs = [
    { id: "classic" as const, name: "Satin Gold Classic" },
    { id: "glossy" as const, name: "Glossy Royal Shine" },
    { id: "noir" as const, name: "Midnight Charcoal" },
    { id: "bridal" as const, name: "Wedding Copper" },
  ];

  const amounts = ["₹2,000", "₹5,000", "₹10,000", "₹25,000"];

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    if (!recipientName) {
      alert("Please enter recipient name.");
      return;
    }
    setIsOrdered(true);
  };

  const activeAmountDisplay = customAmount ? `₹${Number(customAmount).toLocaleString('en-IN')}` : selectedAmount;

  return (
    <>
      <PageHeader
        title="The Gift of Luxury"
        subtitle="Share the Glossy Experience"
        breadcrumbs={breadcrumbs}
        backgroundImageUrl="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1920&auto=format&fit=crop"
      />

      <section className="bg-primary py-24 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* LEFT: FORM CUSTOMIZER (7 Cols) */}
            <div className="lg:col-span-7 bg-secondary border border-sage/10 rounded-2xl p-5 sm:p-8 md:p-12 shadow-sm">
              <h2 className="text-charcoal font-playfair text-2xl md:text-3xl font-medium mb-6">
                Customize Your Gift Card
              </h2>
              <div className="w-12 h-[1px] bg-sage/30 mb-8" />

              {!isOrdered ? (
                <form onSubmit={handlePurchase} className="space-y-8">
                  {/* Step 1: Design Selection */}
                  <div>
                    <label className="text-charcoal font-outfit text-xs tracking-wider uppercase block mb-4 font-semibold">
                      1. Select Card Design
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {designs.map((d) => (
                        <button
                          key={d.id}
                          type="button"
                          onClick={() => setSelectedDesign(d.id)}
                          className={`px-3 py-3 text-[11px] tracking-wider uppercase font-semibold border text-center transition-all duration-300 rounded-full cursor-pointer focus:outline-none ${
                            selectedDesign === d.id
                              ? "bg-sage text-primary border-sage"
                              : "bg-primary text-cream border border-sage/10 hover:border-sage hover:text-sage"
                          }`}
                        >
                          {d.name.split(" ")[1]}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Denomination */}
                  <div>
                    <label className="text-charcoal font-outfit text-xs tracking-wider uppercase block mb-4 font-semibold">
                      2. Choose Card Value
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-4">
                      {amounts.map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => {
                            setSelectedAmount(amount);
                            setCustomAmount("");
                          }}
                          className={`px-4 py-3 text-sm font-semibold border text-center transition-all duration-300 rounded-full cursor-pointer focus:outline-none ${
                            selectedAmount === amount && !customAmount
                              ? "bg-sage text-primary border-sage"
                              : "bg-primary text-cream border border-sage/10 hover:border-sage hover:text-sage"
                          }`}
                        >
                          {amount}
                        </button>
                      ))}
                      <div className="col-span-2">
                        <input
                          type="number"
                          placeholder="Custom Amount (₹)"
                          value={customAmount}
                          onChange={(e) => {
                            setCustomAmount(e.target.value);
                            setSelectedAmount("");
                          }}
                          className="w-full bg-primary border border-sage/20 px-4 py-3 text-sm text-charcoal focus:border-sage focus:outline-none transition-colors duration-300 rounded-full placeholder-cream/45"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Delivery Options */}
                  <div>
                    <label className="text-charcoal font-outfit text-xs tracking-wider uppercase block mb-4 font-semibold">
                      3. Select Delivery Method
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setDeliveryType("digital")}
                        className={`p-4 border text-left flex flex-col justify-between min-h-[100px] transition-all duration-300 rounded-2xl cursor-pointer focus:outline-none ${
                          deliveryType === "digital"
                            ? "border-sage bg-primary shadow-sm"
                            : "border-sage/15 bg-primary/40 text-cream hover:border-sage/30"
                        }`}
                      >
                        <span className={`text-xs uppercase tracking-wider font-semibold ${deliveryType === "digital" ? "text-sage" : "text-charcoal"}`}>
                          Digital Gift Card
                        </span>
                        <span className="text-[10px] text-cream/60 leading-relaxed font-light mt-2">
                          Instant delivery via email. Includes personalized greeting.
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setDeliveryType("physical")}
                        className={`p-4 border text-left flex flex-col justify-between min-h-[100px] transition-all duration-300 rounded-2xl cursor-pointer focus:outline-none ${
                          deliveryType === "physical"
                            ? "border-sage bg-primary shadow-sm"
                            : "border-sage/15 bg-primary/40 text-cream hover:border-sage/30"
                        }`}
                      >
                        <span className={`text-xs uppercase tracking-wider font-semibold ${deliveryType === "physical" ? "text-sage" : "text-charcoal"}`}>
                          Physical Premium Card
                        </span>
                        <span className="text-[10px] text-cream/60 leading-relaxed font-light mt-2">
                          Handcrafted packaging. Courier delivery within Delhi NCR.
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Step 4: Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-charcoal font-outfit text-xs tracking-wider uppercase block mb-2 font-medium">
                        Recipient Name
                      </label>
                      <input
                        type="text"
                        required
                        value={recipientName}
                        onChange={(e) => setRecipientName(e.target.value)}
                        className="w-full bg-primary border border-sage/20 px-4 py-3 text-sm text-charcoal focus:border-sage focus:outline-none transition-colors duration-300 rounded-full"
                      />
                    </div>
                    <div>
                      <label className="text-charcoal font-outfit text-xs tracking-wider uppercase block mb-2 font-medium">
                        Recipient Email or Phone
                      </label>
                      <input
                        type="text"
                        required
                        value={recipientEmail}
                        onChange={(e) => setRecipientEmail(e.target.value)}
                        className="w-full bg-primary border border-sage/20 px-4 py-3 text-sm text-charcoal focus:border-sage focus:outline-none transition-colors duration-300 rounded-full"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="text-charcoal font-outfit text-xs tracking-wider uppercase block mb-2 font-medium">
                        Occasion
                      </label>
                      <select
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                        className="w-full bg-primary border border-sage/20 px-4 py-3 text-sm text-charcoal focus:border-sage focus:outline-none transition-colors duration-300 rounded-full"
                      >
                        {["Birthday", "Anniversary", "Wedding", "Thank You", "Just Because", "Corporate"].map((o) => (
                          <option key={o} value={o} className="bg-primary text-charcoal">
                            {o}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="text-charcoal font-outfit text-xs tracking-wider uppercase block mb-2 font-medium">
                        Personalized Message
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Write a warm note for the recipient..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-primary border border-sage/20 px-4 py-3 text-sm text-charcoal focus:border-sage focus:outline-none transition-colors duration-300 rounded-2xl resize-none placeholder-cream/45"
                      />
                    </div>
                  </div>

                  <Button type="submit" variant="primary" className="w-full py-4 text-sm font-semibold flex items-center justify-center gap-2">
                    <Gift className="w-4 h-4" />
                    Purchase Gift Card
                  </Button>
                </form>
              ) : (
                <div className="text-center py-12 flex flex-col items-center animate-fade-in">
                  <div className="w-16 h-16 bg-sage/10 border border-sage/40 rounded-full flex items-center justify-center text-sage mb-6">
                    <Send className="w-6 h-6" />
                  </div>
                  <h3 className="text-charcoal font-playfair text-2xl font-medium mb-3">
                    Order Submitted Successfully
                  </h3>
                  <p className="text-cream font-outfit text-sm mb-8 max-w-sm leading-relaxed font-light">
                    Your luxury gift card order has been initiated. Our guest executives will reach out via email/phone within 15 minutes to secure payment and dispatch the card.
                  </p>
                  <Button onClick={() => setIsOrdered(false)} variant="secondary">
                    Configure Another Card
                  </Button>
                </div>
              )}
            </div>

            {/* RIGHT: LIVE CARD PREVIEW (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-start">
              <div className="sticky top-28 space-y-8">
                <span className="text-sage font-outfit text-xs tracking-[0.25em] uppercase font-semibold">
                  Live Card Preview
                </span>
                
                {/* Live Card Component wrapper */}
                <div className="w-full bg-secondary border border-sage/10 p-6 flex items-center justify-center rounded-2xl shadow-sm">
                  <GiftCard
                    amount={activeAmountDisplay || "₹0"}
                    designStyle={selectedDesign}
                    isActive={true}
                  />
                </div>

                {/* Important Terms card */}
                <div className="bg-secondary border border-sage/10 p-6 flex flex-col gap-4 rounded-2xl shadow-sm">
                  <h4 className="text-charcoal font-playfair text-lg font-medium flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-sage" />
                    Important Information
                  </h4>
                  <ul className="space-y-3 font-outfit text-xs text-cream leading-relaxed font-light list-disc pl-4">
                    <li>This gift voucher remains valid for exactly 12 months from payment validation date.</li>
                    <li>Redeemable in full or in part against all hair services, rituals, and retail boutique products.</li>
                    <li>Vouchers are non-refundable, non-transferable, and cannot be exchanged for cash.</li>
                    <li>Any outstanding unused balance carries forward securely until expiry date.</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
