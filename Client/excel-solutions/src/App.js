"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Menu,
  X,
  Check,
  ArrowRight,
  Sparkles,
  Code,
  HeadphonesIcon,
  FileText,
  Linkedin,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function ExcelSolutionsApp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const [formStatus, setFormStatus] = useState("");
  const [currentExample, setCurrentExample] = useState(0);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguage = () =>
    setLanguage((prevLang) => (prevLang === "en" ? "he" : "en"));

  const schedulingLink =
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2Y-cuCId46cDXpbHAESrw6HZ2yMObNXqwuKwHYgEVPo9wHnDIIhkMy8vdwYZi7qzep1Ef0r1pb?gv=true";

  const text = {
    en: {
      headerTitle: "Excel Solutions for Business",
      services: "Services",
      benefits: "Benefits",
      team: "Our Team",
      contact: "Contact",
      heroTitle: "Supercharge Your Business with Expert Excel Solutions",
      heroSubtitle:
        "From custom VBA tools to automated workflows, we transform your Excel experience.",
      freeConsultation: "Get Your Free Consultation",
      servicesTitle: "Our Services",
      servicesList: [
        {
          title: "Excel Training",
          description:
            "Empower your team with expert-led Excel training sessions.",
          icon: <HeadphonesIcon />,
        },
        {
          title: "VBA & COM Add-in Development",
          description:
            "Custom solutions to automate and streamline your workflows.",
          icon: <Code />,
        },
        {
          title: "Technical Support & Advisory",
          description:
            "Get expert advice and support for all your Excel needs.",
          icon: <Sparkles />,
        },
        {
          title: "Custom Excel Templates",
          description: "Tailor-made templates to boost your productivity.",
          icon: <FileText />,
        },
      ],
      benefitsTitle: "Why Choose Our Excel Services?",
      benefitsList: [
        {
          title: "Save Time",
          description: "Automate repetitive tasks and streamline workflows",
          icon: "⏱️",
        },
        {
          title: "Reduce Errors",
          description: "Minimize manual data entry and calculation mistakes",
          icon: "✅",
        },
        {
          title: "Boost Productivity",
          description: "Equip your team with powerful, custom-built tools",
          icon: "🚀",
        },
        {
          title: "Gain Insights",
          description:
            "Unlock the full potential of your data with advanced Excel techniques",
          icon: "💡",
        },
        {
          title: "Scale Operations",
          description: "Create robust systems that grow with your business",
          icon: "📈",
        },
      ],
      teamMembers: [
        {
          name: "Almog Dror",
          role: "Excel Expert",
          image: "/placeholder.svg?height=400&width=400",
        },
        {
          name: "Ori Dagan",
          role: "Business Development",
          image: "/placeholder.svg?height=400&width=400",
        },
        {
          name: "Yuval Chen",
          role: "Automation Developer",
          image: "/placeholder.svg?height=400&width=400",
        },
      ],
      testimonial:
        '"[Your Company] transformed our Excel processes. We\'ve cut report generation time by 75% and significantly reduced errors."',
      ctaTitle: "Ready to Excel in Excel?",
      ctaText:
        "Let's discuss how we can optimize your Excel workflows and boost your business efficiency.",
      scheduleConsultation: "Schedule Your Free Consultation",
      contactInfo: "Contact: dalmog123@gmail.com | Phone: (+972) 54-5999731",
      formSubmitted: "Thank you! Your message has been sent.",
      formError:
        "Oops! There was an error sending your message. Please try again.",
      excelExamplesTitle: "Excel Formula Examples",
      excelExamples: [
        {
          formula: "=INDEX(data, MATCH(lookup_value, lookup_array, 0))",
          title: "INDEX-MATCH Combination",
          description:
            "This powerful combination is used for looking up values in a table or range. It's more flexible than VLOOKUP as it allows for both vertical and horizontal lookups.",
        },
        {
          formula:
            "=SUMIFS(sum_range, criteria_range1, criteria1, [criteria_range2, criteria2, ...])",
          title: "SUMIFS for Multiple Criteria",
          description:
            "SUMIFS allows you to sum values that meet multiple criteria. It's great for creating dynamic reports and analyzing data based on various conditions.",
        },
        {
          formula:
            "=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])",
          title: "VLOOKUP for Vertical Searches",
          description:
            "VLOOKUP is used to find things in a table or a range by row. It's perfect for fetching data from large datasets based on a specific lookup value.",
        },
        {
          formula: "=FILTER(array, include, [if_empty])",
          title: "FILTER for Dynamic Data Extraction",
          description:
            "The FILTER function allows you to extract data that meets specific criteria. It's a powerful tool for creating dynamic, criteria-based reports.",
        },
        {
          formula:
            "=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode], [search_mode])",
          title: "XLOOKUP for Advanced Lookups",
          description:
            "XLOOKUP is a more versatile and powerful successor to VLOOKUP. It can look both vertically and horizontally, and even in reverse order.",
        },
        {
          formula:
            "=SUMPRODUCT((criteria_range1=criteria1)*(criteria_range2=criteria2)*value_range)",
          title: "SUMPRODUCT for Complex Calculations",
          description:
            "SUMPRODUCT can perform complex calculations involving multiple criteria and ranges. It's great for summing values based on multiple conditions without helper columns.",
        },
        {
          formula: "=IFERROR(value, value_if_error)",
          title: "IFERROR for Error Handling",
          description:
            "IFERROR is used to trap and handle errors in formulas. It's useful for maintaining clean and professional-looking spreadsheets by displaying custom messages instead of error values.",
        },
        {
          formula: "=LET(name1, value1, name2, value2, ..., calculation)",
          title: "LET for Naming Parts of a Formula",
          description:
            "The LET function allows you to assign names to calculation results. This can make complex formulas more readable and easier to debug.",
        },
      ],
    },
    he: {
      headerTitle: "פתרונות אקסל לעסקים",
      services: "שירותים",
      benefits: "יתרונות",
      team: "הצוות שלנו",
      contact: "צור קשר",
      heroTitle: "האיצו את העסק שלכם עם פתרונות אקסל מקצועיים",
      heroSubtitle:
        ".מפי��וח כלים מותאמים אישית ועד הטמעת תהליכי עבודה, אנו נעזור להאיץ את התייעלות של העסק שלכם",
      freeConsultation: "לשיחת ייעוץ חינם",
      servicesTitle: "השירותים שלנו",
      servicesList: [
        {
          title: "הדרכות אקסל",
          description: "העצימו את הצוות שלכם עם הדרכות אקסל מקצועיות.",
          icon: <HeadphonesIcon />,
        },
        {
          title: "פיתוח VBA ותוספים",
          description:
            "פתרונות מותאמים אישית לאוטומציה וייעול תהליכי העבודה שלכם.",
          icon: <Code />,
        },
        {
          title: "תמיכה טכנית וייעוץ",
          description: "קבלו ייעוץ ותמיכה מומחים לכל צרכי האקסל שלכם.",
          icon: <Sparkles />,
        },
        {
          title: "תבניות אקסל מותאמות אישית",
          description: "תבניות מותאמות אישית להגברת הפרודוקטיביות שלכם.",
          icon: <FileText />,
        },
      ],
      benefitsTitle: "?למה לבחור בשירותים שלנו",
      benefitsList: [
        {
          title: "חיסכון בזמן",
          description:
            "נבנה לכם אוטומציה של משימות טכניות וחוזרות לייעול תהליכי עבודה",
          icon: "⏱️",
        },
        {
          title: "הפחתת טעויות",
          description: "צמצמו טעויות אנוש בהזנת נתונים ידנית וחישובים מסורבלים",
          icon: "✅",
        },
        {
          title: "הגברת פרודוקטיביות",
          description: "ציידו את הצוות שלכם בידע וכלים חדשים",
          icon: "🚀",
        },
        {
          title: "הפקת תובנות",
          description:
            "מיצוי מלוא הפוטנציאל של הנתונים שלכם לקבלת החלטות חכמות",
          icon: "💡",
        },
        {
          title: "הרחבת הפעילות",
          description: "יצירת מערכות חזקות שגדלות יחד עם העסק שלכם",
          icon: "📈",
        },
      ],
      teamMembers: [
        {
          name: "אלמוג דרור",
          role: "מומחה אקסל",
          image: "/placeholder.svg?height=400&width=400",
        },
        {
          name: "אורי דגן",
          role: "פיתוח עסקי",
          image: "/placeholder.svg?height=400&width=400",
        },
        {
          name: "יובל חן",
          role: "מפתח אוטומציה",
          image: "/placeholder.svg?height=400&width=400",
        },
      ],
      testimonial:
        '".החברה שלכם שינתה לחלוטין את תהליכי האקסל שלנו. קיצרנו את זמן הפקת הדוחות ב-75% והפחתנו משמעותית את כמות הטעויות"',
      ctaTitle: "מוכנים להצטיין באקסל?",
      ctaText:
        ".בואו נדבר איך נוכל לעזור לכם לייעל את תהליכי העבודה באקסל ולהגביר את היעילות שלכם",
      scheduleConsultation: "קבעו שיחת ייעוץ חינם",
      contactInfo: "Contact: dalmog123@gmail.com | Phone: (+972) 54-5999731",
      formSubmitted: ".תודה! ההודעה שלך נשלחה",
      formError: ".אופס! אירעה שגיאה בשליחת ההודעה. אנא נסה שנית",
      excelExamplesTitle: "דוגמאות לנוסחאות אקסל",
      excelExamples: [
        {
          formula: "=INDEX(data, MATCH(lookup_value, lookup_array, 0))",
          title: "שילוב INDEX-MATCH",
          description:
            "שילוב זה משמש לחיפוש ערכים בטבלה או טווח. הוא גמיש יותר מ-VLOOKUP מכיוון שהוא מאפשר חיפוש אנכי ואופקי.",
        },
        {
          formula:
            "=SUMIFS(sum_range, criteria_range1, criteria1, [criteria_range2, criteria2, ...])",
          title: "SUMIFS לקריטריונים מרובים",
          description:
            "SUMIFS מאפשר לסכום ערכים העומדים במספר קריטריונים. מצוין ליצירת דוחות דינמיים וניתוח נתונים על בסיס תנאים שונים.",
        },
        {
          formula:
            "=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])",
          title: "VLOOKUP לחיפושים אנכיים",
          description:
            "VLOOKUP משמש למציאת נתונים בטבלה או טווח לפי שורה. מושלם לאחזור מידע ממסדי נתונים גדולים על בסיס ערך חיפוש ספציפי.",
        },
        {
          formula: "=FILTER(array, include, [if_empty])",
          title: "FILTER לחילוץ נתונים דינמי",
          description:
            "פונקציית FILTER מאפשרת לחלץ נתונים העומדים בקריטריונים ספציפיים. כלי חזק ליצירת דוחות דינמיים מבוססי קריטריונים.",
        },
        {
          formula:
            "=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode], [search_mode])",
          title: "XLOOKUP לחיפושים מתקדמים",
          description:
            "XLOOKUP הוא יורש חזק וגמיש יותר ל-VLOOKUP. הוא יכול לחפש אנכית ואופקית, ואפילו בסדר הפוך.",
        },
        {
          formula:
            "=SUMPRODUCT((criteria_range1=criteria1)*(criteria_range2=criteria2)*value_range)",
          title: "SUMPRODUCT  לחישובים מורכבים",
          description:
            "SUMPRODUCT יכול לבצע חישובים מורכבים הכוללים קריטריונים וטווחים מרובים. מצוין לסיכום ערכים על בסיס תנאים מרובים ללא עמודות עזר.",
        },
        {
          formula: "=IFERROR(value, value_if_error)",
          title: "IFERROR לטיפול בשגיאות",
          description:
            "IFERROR משמש ללכידת שגיאות בנוסחאות וטיפול בהן. שימושי לשמירה על גיליונות נקיים ומקצועיים על ידי הצגת הודעות מותאמות אישית במקום ערכי שגיאה.",
        },
        {
          formula: "=LET(name1, value1, name2, value2, ..., calculation)",
          title: "LET לשיום חלקים בנוסחה",
          description:
            "פונקציית LET מאפשרת להקצות שמות לתוצאות חישוב. זה יכול להפוך נוסחאות מורכבות לקריאות יותר וקלות יותר לניפוי באגים.",
        },
      ],
    },
  };

  const handleScroll = (target) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormStatus("success");
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setFormStatus("error");
    }
  };

  return (
    <div
      className={`font-sans text-gray-900 ${
        language === "he" ? "rtl" : "ltr"
      } overflow-x-hidden`}
    >
      {" "}
      {/* Header */}{" "}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-md shadow-md z-50"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="text-3xl font-bold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-orange-500">
                {" "}
                {text[language].headerTitle}{" "}
              </span>{" "}
            </motion.div>{" "}
            <nav className="hidden md:flex items-center space-x-8">
              {" "}
              {["services", "benefits", "team", "contact"].map(
                (item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item}`}
                    onClick={() => handleScroll(`#${item}`)}
                    className="text-gray-600 hover:text-orange-500 transition duration-300"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * (index + 1) }}
                  >
                    {text[language][item]}{" "}
                  </motion.a>
                )
              )}{" "}
              <motion.button
                onClick={toggleLanguage}
                className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {language === "en" ? "HE" : "EN"}{" "}
              </motion.button>{" "}
            </nav>{" "}
            <motion.button
              className="md:hidden text-gray-600"
              onClick={toggleMenu}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {isMenuOpen ? <X /> : <Menu />}{" "}
            </motion.button>{" "}
          </div>{" "}
        </div>{" "}
      </motion.header>
      {/* Mobile Menu */}{" "}
      <AnimatePresence>
        {" "}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-40 bg-white bg-opacity-95 backdrop-blur-md"
          >
            <div className="container mx-auto px-4 py-20">
              <ul className="space-y-6">
                {" "}
                {["services", "benefits", "team", "contact"].map(
                  (item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * (index + 1) }}
                    >
                      <a
                        href={`#${item}`}
                        onClick={() => {
                          handleScroll(`#${item}`);
                          toggleMenu();
                        }}
                        className="block text-2xl font-semibold text-gray-800 hover:text-orange-500 transition duration-300"
                      >
                        {text[language][item]}{" "}
                      </a>{" "}
                    </motion.li>
                  )
                )}{" "}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <button
                    onClick={() => {
                      toggleLanguage();
                      toggleMenu();
                    }}
                    className="block w-full text-left text-2xl font-semibold text-gray-800 hover:text-orange-500 transition duration-300"
                  >
                    {language === "en" ? "Switch to Hebrew" : "עבור לאנגלית"}{" "}
                  </button>{" "}
                </motion.li>{" "}
              </ul>{" "}
            </div>{" "}
          </motion.div>
        )}{" "}
      </AnimatePresence>
      {/* Hero Section */}{" "}
      <motion.section
        className="bg-gradient-to-br from-orange-500 to-red-600 text-white py-32 mt-16"
        style={{ opacity, scale }}
      >
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4 text-center"
          >
            {text[language].heroTitle}{" "}
          </motion.h1>{" "}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-center"
          >
            {text[language].heroSubtitle}{" "}
          </motion.p>{" "}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <a
              href="#contact"
              className="bg-white text-orange-500 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 inline-block"
            >
              {text[language].freeConsultation}{" "}
            </a>{" "}
          </motion.div>{" "}
        </div>{" "}
      </motion.section>
      {/* Services Section */}{" "}
      <section id="services" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12"
          >
            {text[language].servicesTitle}{" "}
          </motion.h2>{" "}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {" "}
            {text[language].servicesList.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center transition duration-300"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: index * 0.1 + 0.2,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  className="text-orange-500 mb-4"
                >
                  {service.icon}{" "}
                </motion.div>{" "}
                <h3 className="text-xl font-semibold mb-4">
                  {" "}
                  {service.title}{" "}
                </h3>{" "}
                <p className="text-gray-600"> {service.description} </p>{" "}
              </motion.div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </section>
      {/* Benefits Section */}{" "}
      <section id="benefits" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12"
          >
            {text[language].benefitsTitle}{" "}
          </motion.h2>{" "}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {" "}
            {text[language].benefitsList.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-100 p-6 rounded-lg shadow-md text-center transition duration-300"
              >
                <div className="text-4xl mb-4"> {benefit.icon} </div>{" "}
                <h3 className="text-xl font-semibold mb-2">
                  {" "}
                  {benefit.title}{" "}
                </h3>{" "}
                <p className="text-gray-600"> {benefit.description} </p>{" "}
              </motion.div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </section>
      {/* Team Section */}{" "}
      <section id="team" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12"
          >
            {text[language].team}{" "}
          </motion.h2>{" "}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {" "}
            {text[language].teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {" "}
                    {member.name}{" "}
                  </h3>{" "}
                  <p className="text-gray-600 mb-4"> {member.role} </p>{" "}
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-orange-500 transition duration-300"
                    >
                      <Linkedin size={24} />{" "}
                    </a>{" "}
                    <a
                      href="#"
                      className="text-gray-400 hover:text-orange-500 transition duration-300"
                    >
                      <Mail size={24} />{" "}
                    </a>{" "}
                  </div>{" "}
                </div>{" "}
              </motion.div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </section>
      {/* CTA Section */}{" "}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-red-600 text-white text-center">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-8"
          >
            {text[language].ctaTitle}{" "}
          </motion.h2>{" "}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg mb-8"
          >
            {text[language].ctaText}{" "}
          </motion.p>{" "}
          <motion.a
            href={schedulingLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-orange-500 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 inline-block"
          >
            {text[language].scheduleConsultation}{" "}
          </motion.a>{" "}
        </div>{" "}
      </section>
      {/* Contact Section */}{" "}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-8"
          >
            {text[language].contact}{" "}
          </motion.h2>{" "}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg text-center mb-8"
          >
            {text[language].contactInfo}{" "}
          </motion.p>{" "}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="max-w-md mx-auto"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                {" "}
                Name{" "}
              </label>{" "}
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>{" "}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                {" "}
                Email{" "}
              </label>{" "}
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>{" "}
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-bold mb-2"
              >
                {" "}
                Message{" "}
              </label>{" "}
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              >
                {" "}
              </textarea>{" "}
            </div>{" "}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-orange-600 transition duration-300"
            >
              Send Message{" "}
            </motion.button>{" "}
          </motion.form>{" "}
          <AnimatePresence>
            {" "}
            {formStatus === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-4 text-green-600 text-center"
              >
                {text[language].formSubmitted}{" "}
              </motion.p>
            )}{" "}
            {formStatus === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-4 text-red-600 text-center"
              >
                {text[language].formError}{" "}
              </motion.p>
            )}{" "}
          </AnimatePresence>{" "}
        </div>{" "}
      </section>
      {/* Excel Examples Section */}{" "}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12"
          >
            {text[language].excelExamplesTitle}{" "}
          </motion.h2>{" "}
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentExample}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    {" "}
                    {text[language].excelExamples[currentExample].title}{" "}
                  </h3>{" "}
                  <code className="block bg-gray-100 p-4 rounded mb-4 font-mono text-sm">
                    {" "}
                    {text[language].excelExamples[currentExample].formula}{" "}
                  </code>{" "}
                  <p className="text-gray-600">
                    {" "}
                    {
                      text[language].excelExamples[currentExample].description
                    }{" "}
                  </p>{" "}
                </div>{" "}
              </motion.div>{" "}
            </AnimatePresence>{" "}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={() =>
                  setCurrentExample(
                    (prev) =>
                      (prev - 1 + text[language].excelExamples.length) %
                      text[language].excelExamples.length
                  )
                }
                className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition duration-300"
              >
                <ChevronLeft size={24} />{" "}
              </button>{" "}
              <span className="text-gray-600">
                {" "}
                {currentExample + 1}/ {text[language].excelExamples.length}{" "}
              </span>{" "}
              <button
                onClick={() =>
                  setCurrentExample(
                    (prev) => (prev + 1) % text[language].excelExamples.length
                  )
                }
                className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition duration-300"
              >
                <ChevronRight size={24} />{" "}
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>
      {/* Footer */}{" "}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <div className="container mx-auto px-4">
          <p>
            {" "}
            & copy; {new Date().getFullYear()}
            Excel Solutions.All rights reserved.{" "}
          </p>{" "}
          <div className="mt-4 flex justify-center space-x-4">
            <a
              href="#"
              className="hover:text-orange-500 transition duration-300"
            >
              {" "}
              Privacy Policy{" "}
            </a>{" "}
            <a
              href="#"
              className="hover:text-orange-500 transition duration-300"
            >
              {" "}
              Terms of Service{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </footer>{" "}
    </div>
  );
}
