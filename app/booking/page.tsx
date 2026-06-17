"use client";

import { FormEvent, useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import Button from "@/components/ui/Button";
import { servicesData } from "@/constants/services";
import { teamData } from "@/constants/team";
import { Calendar, Phone, MessageCircle, Clock, MapPin, CheckCircle, ChevronDown, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DropdownOption {
  value: string;
  label: string;
  details?: string;
}

interface CustomDropdownProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: DropdownOption[];
  placeholder: string;
  disabled?: boolean;
  error?: string;
}

function CustomDropdown({
  label,
  value,
  onChange,
  options,
  placeholder,
  disabled = false,
  error,
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div ref={containerRef} className="relative w-full">
      <label className="text-cream font-outfit text-xs uppercase tracking-wider block mb-2 font-medium">
        {label}
      </label>
      <button
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-primary border text-left flex items-center justify-between px-5 py-3.5 text-sm text-charcoal rounded-full transition-all duration-300 focus:outline-none ${
          disabled
            ? "opacity-50 cursor-not-allowed border-sage/10"
            : error
            ? "border-red-500 cursor-pointer"
            : "border-sage/20 hover:border-sage/40 focus:border-sage cursor-pointer"
        }`}
      >
        <span className={selectedOption ? "text-charcoal font-medium" : "text-cream/50"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-sage/60 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && !disabled && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute z-50 mt-2 w-full bg-secondary border border-sage/20 rounded-2xl shadow-xl overflow-hidden max-h-60 overflow-y-auto"
          >
            {options.length === 0 ? (
              <div className="px-5 py-4 text-xs text-cream/50 font-outfit italic">
                No options available
              </div>
            ) : (
              <div className="py-1">
                {options.map((opt) => {
                  const isSelected = opt.value === value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => {
                        onChange(opt.value);
                        setIsOpen(false);
                      }}
                      className={`w-full px-5 py-3 text-left text-sm transition-colors flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? "bg-sage/10 text-sage font-medium"
                          : "text-charcoal hover:bg-sage/5 hover:text-sage"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {isSelected && <Check className="w-4 h-4 text-sage flex-shrink-0" />}
                        <span className={isSelected ? "font-semibold" : "font-normal"}>
                          {opt.label}
                        </span>
                      </div>
                      {opt.details && (
                        <span className={`text-[11px] font-outfit font-medium tracking-wide ${isSelected ? "text-sage" : "text-gold"}`}>
                          {opt.details}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      {error && <p className="text-red-500 text-xs mt-1.5 font-outfit pl-2">{error}</p>}
    </div>
  );
}

interface CustomDatePickerProps {
  label: string;
  value: string; // "YYYY-MM-DD"
  onChange: (value: string) => void;
  error?: string;
}

function CustomDatePicker({
  label,
  value,
  onChange,
  error,
}: CustomDatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const today = new Date();

  const [currentDate, setCurrentDate] = useState(() => {
    if (value) return new Date(value);
    return new Date();
  });

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const firstDayIndex = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  const daysArray: (number | null)[] = [];
  for (let i = 0; i < firstDayIndex; i++) {
    daysArray.push(null);
  }
  for (let i = 1; i <= totalDays; i++) {
    daysArray.push(i);
  }

  const formatDateDisplay = (dateStr: string) => {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const selectDay = (day: number) => {
    const selectedDate = new Date(year, month, day);
    const offset = selectedDate.getTimezoneOffset();
    const localDate = new Date(selectedDate.getTime() - offset * 60 * 1000);
    const dateString = localDate.toISOString().split("T")[0];
    
    onChange(dateString);
    setIsOpen(false);
  };

  const isDayDisabled = (day: number) => {
    const checkDate = new Date(year, month, day);
    const checkDateMidnight = new Date(year, month, day).setHours(0, 0, 0, 0);
    const todayMidnight = new Date().setHours(0, 0, 0, 0);

    // Disable past dates
    if (checkDateMidnight < todayMidnight) return true;

    // Disable Mondays (getDay() === 1)
    if (checkDate.getDay() === 1) return true;

    return false;
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <label className="text-cream font-outfit text-xs uppercase tracking-wider block mb-2 font-medium">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-primary border text-left flex items-center justify-between px-5 py-3.5 text-sm text-charcoal rounded-full transition-all duration-300 focus:outline-none ${
          error
            ? "border-red-500 cursor-pointer"
            : "border-sage/20 hover:border-sage/40 focus:border-sage cursor-pointer"
        }`}
      >
        <span className={value ? "text-charcoal font-medium" : "text-cream/50"}>
          {value ? formatDateDisplay(value) : "Select date..."}
        </span>
        <Calendar className="w-4 h-4 text-sage/60" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute z-50 mt-2 w-[280px] sm:w-full max-w-[320px] left-0 sm:left-auto bg-secondary border border-sage/20 rounded-2xl shadow-xl p-4 select-none"
          >
            {/* Month & Navigation */}
            <div className="flex items-center justify-between mb-4">
              <button
                type="button"
                onClick={handlePrevMonth}
                disabled={year === today.getFullYear() && month === today.getMonth()}
                className="p-1.5 rounded-full hover:bg-sage/10 text-sage disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="font-playfair text-charcoal font-semibold text-sm">
                {months[month]} {year}
              </span>
              <button
                type="button"
                onClick={handleNextMonth}
                className="p-1.5 rounded-full hover:bg-sage/10 text-sage transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Weekdays */}
            <div className="grid grid-cols-7 gap-1 text-center mb-1 text-[11px] font-outfit uppercase tracking-wider text-cream/60 font-semibold">
              {weekdays.map((day) => (
                <div key={day} className="py-1">
                  {day}
                </div>
              ))}
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-1 text-center">
              {daysArray.map((day, idx) => {
                if (day === null) {
                  return <div key={`empty-${idx}`} />;
                }

                const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                const isSelected = value === dateStr;
                const disabled = isDayDisabled(day);

                return (
                  <button
                    key={`day-${day}`}
                    type="button"
                    disabled={disabled}
                    onClick={() => selectDay(day)}
                    className={`py-2 text-xs font-outfit rounded-full transition-all flex items-center justify-center cursor-pointer ${
                      isSelected
                        ? "bg-sage text-primary font-bold shadow-sm"
                        : disabled
                        ? "text-cream/20 cursor-not-allowed line-through"
                        : "text-charcoal hover:bg-sage/15 hover:text-sage"
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
            
            {/* Note legend */}
            <div className="mt-3 pt-2.5 border-t border-sage/10 flex justify-between items-center text-[10px] text-cream/60 font-outfit">
              <span>* Closed on Mondays</span>
              <span className="text-sage font-medium">Tue - Sun</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {error && <p className="text-red-500 text-xs mt-1.5 font-outfit pl-2">{error}</p>}
    </div>
  );
}

function BookingForm() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");
  const categoryParam = searchParams.get("category");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [service, setService] = useState("");
  const [stylist, setStylist] = useState("No Preference");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [success, setSuccess] = useState(false);

  // Parse query params for pre-selection
  useEffect(() => {
    if (serviceParam) {
      const decodedService = decodeURIComponent(serviceParam);
      const foundCategory = servicesData.find((cat) =>
        cat.items.some(
          (item) =>
            item.name.toLowerCase() === decodedService.toLowerCase() ||
            item.id === decodedService
        )
      );
      if (foundCategory) {
        setSelectedCategory(foundCategory.title);
        const foundService = foundCategory.items.find(
          (item) =>
            item.name.toLowerCase() === decodedService.toLowerCase() ||
            item.id === decodedService
        );
        if (foundService) {
          setService(foundService.name);
        }
      }
    } else if (categoryParam) {
      const decodedCategory = decodeURIComponent(categoryParam);
      const foundCategory = servicesData.find(
        (cat) =>
          cat.title.toLowerCase() === decodedCategory.toLowerCase() ||
          cat.id === decodedCategory
      );
      if (foundCategory) {
        setSelectedCategory(foundCategory.title);
      }
    }
  }, [serviceParam, categoryParam]);

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Book Appointment", path: "/booking" },
  ];

  const timeSlots = [
    "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
    "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
    "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM",
    "07:00 PM"
  ];

  const categoryOptions = servicesData.map((cat) => ({
    value: cat.title,
    label: cat.title,
  }));

  const activeCategoryObj = servicesData.find((cat) => cat.title === selectedCategory);
  const serviceOptions = activeCategoryObj
    ? activeCategoryObj.items.map((item) => ({
        value: item.name,
        label: item.name,
        details: item.price,
      }))
    : [];

  const stylistOptions = [
    { value: "No Preference", label: "No Preference (First Available)" },
    ...teamData.map((t) => ({
      value: t.name,
      label: t.name,
      details: t.role.split(" ")[0],
    })),
  ];

  const timeOptions = timeSlots.map((slot) => ({
    value: slot,
    label: slot,
  }));

  const handleCategoryChange = (val: string) => {
    setSelectedCategory(val);
    setService(""); // Reset selected service since category changed
    if (errors.category) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy.category;
        return copy;
      });
    }
  };

  const handleServiceChange = (val: string) => {
    setService(val);
    if (errors.service) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy.service;
        return copy;
      });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) newErrors.name = "Full Name is required.";
    if (!phone.trim()) {
      newErrors.phone = "Phone Number is required.";
    } else if (!/^[0-9+\s-]{10,15}$/.test(phone.trim())) {
      newErrors.phone = "Please enter a valid phone number.";
    }
    if (!selectedCategory) newErrors.category = "Please select a category.";
    if (!service) newErrors.service = "Please select a service.";
    if (!date) newErrors.date = "Please select a date.";
    if (!time) newErrors.time = "Please select a time slot.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setSuccess(true);
    }
  };

  return (
    <>
      <PageHeader
        title="Reserve Your Experience"
        subtitle="Book a session at our Greater Kailash boutique"
        breadcrumbs={breadcrumbs}
        backgroundImageUrl="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1920&auto=format&fit=crop"
      />

      <section className="bg-primary py-24 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* LEFT COLUMN: THE BOOKING FORM (8 Cols) */}
            <div className="lg:col-span-8 bg-secondary border border-sage/10 rounded-2xl p-5 sm:p-8 md:p-12 shadow-sm">
              {!success ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-charcoal font-playfair text-2xl md:text-3xl font-medium mb-6">
                    Appointment Details
                  </h2>
                  <div className="w-12 h-[1px] bg-sage/30 mb-8" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="text-cream font-outfit text-xs uppercase tracking-wider block mb-2 font-medium">
                        Full Name <span className="text-sage">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) {
                            setErrors((prev) => {
                              const copy = { ...prev };
                              delete copy.name;
                              return copy;
                            });
                          }
                        }}
                        className={`w-full bg-primary border ${errors.name ? "border-red-500" : "border-sage/20 focus:border-sage"} px-5 py-3.5 text-sm text-charcoal focus:outline-none transition-colors duration-300 rounded-full`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1.5 font-outfit pl-2">{errors.name}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="text-cream font-outfit text-xs uppercase tracking-wider block mb-2 font-medium">
                        Phone Number <span className="text-sage">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (errors.phone) {
                            setErrors((prev) => {
                              const copy = { ...prev };
                              delete copy.phone;
                              return copy;
                            });
                          }
                        }}
                        placeholder="e.g. +91 98765 43210"
                        className={`w-full bg-primary border ${errors.phone ? "border-red-500" : "border-sage/20 focus:border-sage"} px-5 py-3.5 text-sm text-charcoal focus:outline-none transition-colors duration-300 rounded-full placeholder-cream/45`}
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1.5 font-outfit pl-2">{errors.phone}</p>}
                    </div>

                    {/* Email */}
                    <div className="sm:col-span-2">
                      <label htmlFor="email" className="text-cream font-outfit text-xs uppercase tracking-wider block mb-2 font-medium">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-primary border border-sage/20 focus:border-sage px-5 py-3.5 text-sm text-charcoal focus:outline-none transition-colors duration-300 rounded-full"
                      />
                    </div>

                    {/* Custom Category Selection */}
                    <div>
                      <CustomDropdown
                        label="Select Category *"
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        options={categoryOptions}
                        placeholder="Choose Category..."
                        error={errors.category}
                      />
                    </div>

                    {/* Custom Service Selection */}
                    <div>
                      <CustomDropdown
                        label="Select Service *"
                        value={service}
                        onChange={handleServiceChange}
                        options={serviceOptions}
                        placeholder={
                          selectedCategory
                            ? "Select an experience..."
                            : "Please select category first..."
                        }
                        disabled={!selectedCategory}
                        error={errors.service}
                      />
                    </div>

                    {/* Custom Preferred Stylist */}
                    <div>
                      <CustomDropdown
                        label="Preferred Stylist"
                        value={stylist}
                        onChange={setStylist}
                        options={stylistOptions}
                        placeholder="No Preference"
                      />
                    </div>

                    {/* Custom Preferred Date (Calendar in theme of website) */}
                    <div>
                      <CustomDatePicker
                        label="Preferred Date *"
                        value={date}
                        onChange={(val) => {
                          setDate(val);
                          if (errors.date) {
                            setErrors((prev) => {
                              const copy = { ...prev };
                              delete copy.date;
                              return copy;
                            });
                          }
                        }}
                        error={errors.date}
                      />
                    </div>

                    {/* Custom Preferred Time Slot */}
                    <div>
                      <CustomDropdown
                        label="Preferred Time Slot *"
                        value={time}
                        onChange={(val) => {
                          setTime(val);
                          if (errors.time) {
                            setErrors((prev) => {
                              const copy = { ...prev };
                              delete copy.time;
                              return copy;
                            });
                          }
                        }}
                        options={timeOptions}
                        placeholder="Select time slot..."
                        error={errors.time}
                      />
                    </div>

                    {/* Special Requests */}
                    <div className="sm:col-span-2">
                      <label htmlFor="notes" className="text-cream font-outfit text-xs uppercase tracking-wider block mb-2 font-medium">
                        Special Requests or Notes
                      </label>
                      <textarea
                        id="notes"
                        rows={4}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Let us know about hair length details, styling preferences, or allergies..."
                        className="w-full bg-primary border border-sage/20 focus:border-sage px-5 py-3.5 text-sm text-charcoal focus:outline-none transition-colors duration-300 rounded-2xl resize-none placeholder-cream/45"
                      />
                    </div>
                  </div>

                  <Button type="submit" variant="primary" className="w-full py-4 font-semibold">
                    Confirm Appointment Request
                  </Button>

                  <div className="pt-4 border-t border-sage/10 flex flex-col sm:flex-row justify-between text-cream text-[11px] font-outfit tracking-wide uppercase gap-2">
                    <span>* We&apos;ll confirm your booking within 30 minutes via WhatsApp/SMS</span>
                    <span className="text-sage font-medium">Free cancellation up to 4 hours prior</span>
                  </div>
                </form>
              ) : (
                <div className="text-center py-16 flex flex-col items-center animate-fade-in">
                  <div className="w-20 h-20 bg-sage/10 border border-sage/40 rounded-full flex items-center justify-center text-sage mb-8">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-charcoal font-playfair text-3xl font-medium mb-4 tracking-wide">
                    Appointment Requested!
                  </h3>
                  <p className="text-cream font-outfit text-sm mb-10 max-w-md leading-relaxed font-light">
                    Thank you, <span className="text-sage font-semibold">{name}</span>. We have received your booking request for the <span className="text-charcoal font-semibold">{service}</span> on <span className="text-charcoal font-semibold">{new Date(date).toLocaleDateString("en-IN", { day: 'numeric', month: 'short', year: 'numeric' })}</span> at <span className="text-charcoal font-semibold">{time}</span>.
                  </p>
                  <p className="text-cream/80 font-outfit text-xs max-w-sm mb-8 italic">
                    A WhatsApp confirmation with your stylist details and reservation ID will be sent to your number shortly.
                  </p>
                  <Button onClick={() => setSuccess(false)} variant="secondary">
                    Request Another Slot
                  </Button>
                </div>
              )}
            </div>

            {/* RIGHT COLUMN: INFO CARDS (4 Cols) */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Card 1: Alternative Bookings */}
              <div className="bg-secondary border border-sage/10 rounded-2xl p-6 space-y-6 shadow-sm">
                <h3 className="text-charcoal font-playfair text-xl font-medium">Alternative Booking</h3>
                <div className="w-10 h-[1px] bg-sage/30" />

                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <div>
                      <span className="text-cream/70 text-[10px] uppercase block tracking-wider font-semibold">Book via WhatsApp</span>
                      <a href="https://wa.me/919876543210" className="text-charcoal hover:text-sage transition-colors font-semibold text-sm">
                        +91 98765 43210
                      </a>
                    </div>
                  </li>

                  <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-sage flex-shrink-0" />
                    <div>
                      <span className="text-cream/70 text-[10px] uppercase block tracking-wider font-semibold">Call Our Concierge</span>
                      <a href="tel:+919876543210" className="text-charcoal hover:text-sage transition-colors font-semibold text-sm">
                        +91 98765 43210
                      </a>
                    </div>
                  </li>

                  <li className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-sage flex-shrink-0" />
                    <div>
                      <span className="text-cream/70 text-[10px] uppercase block tracking-wider font-semibold">Working Hours</span>
                      <span className="text-charcoal text-xs font-medium leading-relaxed">
                        Tue - Sun: 10:00 AM — 8:00 PM <br />
                        <span className="text-sage/80 font-semibold">Monday Closed</span>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Card 2: Boutique Info */}
              <div className="bg-secondary border border-sage/10 rounded-2xl p-6 space-y-6 shadow-sm">
                <div className="relative h-48 w-full bg-primary border border-sage/10 overflow-hidden rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=400&auto=format&fit=crop"
                    alt="Glossy Salon GK1 interior"
                    fill
                    sizes="300px"
                    className="object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <h4 className="text-charcoal font-playfair text-lg font-medium">Boutique Details</h4>
                  
                  <ul className="space-y-3 font-outfit text-xs text-cream leading-relaxed font-light">
                    <li className="flex gap-2.5 items-start">
                      <MapPin className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" />
                      <span>
                        2nd Floor, M-Block Market, Greater Kailash Part 1, New Delhi — 110048
                      </span>
                    </li>
                    <li className="text-sage uppercase tracking-wider text-[10px] font-semibold pl-6">
                      * Walk-ins welcome, appointments preferred
                    </li>
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

export default function BookingPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-primary flex flex-col items-center justify-center">
          <div className="w-12 h-12 border-2 border-sage/20 border-t-sage rounded-full animate-spin mb-4" />
          <div className="text-sage font-playfair text-lg tracking-wide animate-pulse">
            Loading booking sanctuary...
          </div>
        </div>
      }
    >
      <BookingForm />
    </Suspense>
  );
}
