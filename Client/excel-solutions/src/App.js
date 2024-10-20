
import React, { useEffect, useState } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import { Sparkles, Code, HeadphonesIcon, FileText} from 'lucide-react'
import { collection, addDoc, Timestamp, setDoc, doc, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebase/firebaseConfig'; // Import your Firestore db
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import MobileMenu from './components/mobileMenu/MobileMenu'
import Hero from './components/hero/Hero'
import Services from './components/services/Services'
import Benefits from './components/benefits/Benefits'
import Team from './components/team/Team'
import CTA from './components/cta/CTA'
import ContactUs from './components/contact/Contact'
import ExcelExamples from './components/excelExamples/ExcelExamples'

export default function ExcelSolutionsApp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState('en')
  const [formStatus, setFormStatus] = useState('')
  const [currentExample, setCurrentExample] = useState(0)

  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.8])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleLanguage = () => setLanguage(prevLang => prevLang === 'en' ? 'he' : 'en')

  const schedulingLink = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2Y-cuCId46cDXpbHAESrw6HZ2yMObNXqwuKwHYgEVPo9wHnDIIhkMy8vdwYZi7qzep1Ef0r1pb?gv=true"

  const text = {
    en: {
      headerTitle: 'Excel Solutions for Business',
      services: 'Services',
      benefits: 'Benefits',
      team: 'Our Team',
      contact: 'Contact',
      heroTitle: 'Supercharge Your Business with Expert Excel Solutions',
      heroSubtitle: 'From custom VBA tools to implemented workflows, we help to transform your business to the 21st century.',
      freeConsultation: 'Get Your Free Consultation',
      servicesTitle: 'Our Services',
      servicesList: [
        { title: 'Excel Training', description: 'Learn how to make Excel work for you, not the other way around', icon: <HeadphonesIcon /> },
        { title: 'VBA & COM Add-in Development', description: 'Custom solutions to automate and streamline your workflows.', icon: <Code /> },
        { title: 'Technical Support & Advisory', description: 'Get expert advice and support for all your business needs.', icon: <Sparkles /> },
        { title: 'Custom Excel Templates', description: 'Tailor-made templates to boost your productivity.', icon: <FileText /> },
      ],
      benefitsTitle: 'Why Choose Our Excel Services?',
      benefitsList: [
        { title: 'Save Time', description: 'Automate repetitive tasks and streamline workflows', icon: '⏱️' },
        { title: 'Reduce Errors', description: 'Minimize manual data entry and calculation mistakes', icon: '✅' },
        { title: 'Boost Productivity', description: 'Equip your team with powerful, custom-built tools', icon: '🚀' },
        { title: 'Gain Insights', description: 'Unlock the full potential of your data with advanced Excel solutions', icon: '💡' },
        { title: 'Scale Operations', description: 'Less administrative work means more time to grow your business', icon: '📈' },
      ],
      teamMembers: [
        {
          name: 'Almog Dror', role: 'Excel & Innovation Expert', image: 'https://media.licdn.com/dms/image/v2/D4D03AQEX_J1EwNBLVQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1711562619187?e=1734566400&v=beta&t=duhfgTaJ-xkqZ9kz9MjXZ6GrCE2NEDzBsvNEUfG9_70',
          linkedin: 'https://www.linkedin.com/in/almogdror/',
          whatsApp : 'https://wa.me/972545999731'
        },
        {
          name: 'Ori Dagan', role: 'Business Development Expert', image: 'https://media.licdn.com/dms/image/v2/D4D03AQExXkJA2OLf5g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1665434051000?e=1734566400&v=beta&t=r4z0GnrtZ4aKDHD0cPXtdS4HzPXBxrionmswpAJ4lJE',
          linkedin: 'https://www.linkedin.com/in/ori-dagan-856078251/',
           whatsApp : 'https://wa.me/972543191601'
        },
        {
          name: 'Yuval Chen', role: 'Automation & Web Development Expert', image: 'https://media.licdn.com/dms/image/v2/D5603AQEPvEOHQRDJBQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1700061564317?e=1734566400&v=beta&t=lrQQqLnEu84_RR45FpWZEsFx-J29ZvwzrC0chvntNqo',
          linkedin: 'https://www.linkedin.com/in/yuval-chen/',
           whatsApp : 'https://wa.me/972546830556'
        }],
      testimonial: '"[Your Company] transformed our Excel processes. We\'ve cut report generation time by 75% and significantly reduced errors."',
      ctaTitle: 'Ready to Excel in Excel?',
      ctaText: "Let's discuss how we can optimize your Excel workflows and boost your business efficiency.",
      scheduleConsultation: 'Schedule Your Free Consultation',
      contactInfo: 'Contact: dalmog123@gmail.com | Phone: (+972) 54-5999731',
      formSubmitted: 'Thank you! Your message has been sent.',
      formError: 'Oops! There was an error sending your message. Please try again.',
      formTimeError : 'You are not allowed to submit a message at this time. Please wait a minute and try again.',
      excelExamplesTitle: 'Excel Formula Examples',
      excelExamples: [
        {
          formula: '=INDEX(reference, MATCH(search_key, range, search_type), [MATCH(search_key, range, search_type)])',
          title: 'INDEX-MATCH Combination',
          description: 'This powerful combination is used for looking up values in a table or range. It\'s more flexible than VLOOKUP as it allows for both vertical and horizontal lookups even in 2 dimenstional arrays.',
        },
        {
          formula: '=SUMIFS(sum_range, criteria_range1, criteria1, [criteria_range2, criteria2, ...])',
          title: 'SUMIFS for Multiple Criteria',
          description: 'SUMIFS allows you to sum values that meet multiple criteria. It\'s great for creating dynamic reports and analyzing data based on various conditions.',
        },
        {
          formula: '=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])',
          title: 'VLOOKUP for Vertical Searches',
          description: 'VLOOKUP is used to find things in a table or a range by row. It\'s perfect for fetching data from large datasets based on a specific lookup value.',
        },
        {
          formula: '=FILTER(array, include, [if_empty])',
          title: 'FILTER for Dynamic Data Extraction',
          description: 'The FILTER function allows you to extract data that meets specific criteria. It\'s a powerful tool for creating dynamic, criteria-based reports.',
        },
        {
          formula: '=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode], [search_mode])',
          title: 'XLOOKUP for Advanced Lookups',
          description: 'XLOOKUP is a more versatile and powerful successor to VLOOKUP. It can look both vertically and horizontally, and even in reverse order.',
        },
        {
          formula: '=SUMPRODUCT((criteria_range1=criteria1)*(criteria_range2=criteria2)*value_range)',
          title: 'SUMPRODUCT for Complex Calculations',
          description: 'SUMPRODUCT can perform complex calculations involving multiple criteria and ranges. It\'s great for summing values based on multiple conditions without helper columns.',
        },
        {
          formula: '=IFERROR(value, value_if_error)',
          title: 'IFERROR for Error Handling',
          description: 'IFERROR is used to trap and handle errors in formulas. It\'s useful for maintaining clean and professional-looking spreadsheets by displaying custom messages instead of error values.',
        },
        {
          formula: '=LET(name1, value1, name2, value2, ..., calculation)',
          title: 'LET for Naming Parts of a Formula',
          description: 'The LET function allows you to assign names to calculation results. This can make complex formulas more readable and easier to debug.',
        },
      ],
    },
    he: {
      headerTitle: 'פתרונות אקסל לעסקים',
      services: 'שירותים',
      benefits: 'יתרונות',
      team: 'הצוות שלנו',
      contact: 'צור קשר',
      heroTitle: 'האיצו את העסק שלכם עם פתרונות אקסל מקצועיים',
      heroSubtitle: '.מפיתוח כלים מותאמים אישית ועד הטמעת תהליכי עבודה, נעזור לכם לייעל את העסק שלכם',
      freeConsultation: 'לשיחת ייעוץ חינם',
      servicesTitle: 'השירותים שלנו',
      servicesList: [
        { title: 'הדרכות אקסל', description: 'למדו כיצד לגרום לאקסל לעבוד בשבילכם, במקום שאתם תעבדו בשבילו', icon: <HeadphonesIcon /> },
        { title: 'פיתוח אוטומציות', description: 'קבלו פתרונות מותאמים אישית לתהליך העבודה שלכם וחסכו זמן יקר', icon: <Code /> },
        { title: 'תמיכה טכנית וייעוץ', description: 'ייעוץ עסקי ותמיכה טכנית בהטמעת תהליכים', icon: <Sparkles /> },
        { title: 'טמפלייטים לאקסל', description: 'ניצור לכם טמלייטים מותאמים אישית למשימות מורכבות', icon: <FileText /> },
      ],
      benefitsTitle: '?למה לבחור בשירותים שלנו',
      benefitsList: [
        { title: 'חיסכון בזמן', description: 'נבנה לכם אוטומציה עבור משימות טכניות מורכבות', icon: '⏱️' },
        { title: 'הפחתת טעויות', description: 'צמצמו טעויות אנוש בהזנת נתונים ידנית וחישובים מסורבלים', icon: '✅' },
        { title: 'הגברת פרודוקטיביות', description: 'למדו כיצד לגרום לאקסל לעבוד בשבילכם', icon: '🚀' },
        { title: 'הפקת תובנות', description: 'נעזור לכם לפענח תובנות חשובות מהמידע העסקי שלכם', icon: '💡' },
        { title: 'הרחבת הפעילות', description: 'נעזור לפענח את התחומים הרווחים ביותר בפעילות העסקית שלכם', icon: '📈' },
      ],
      teamMembers: [
        {
          name: 'אלמוג דרור', role: 'מומחה לאקסל וחדשנות', image: 'https://media.licdn.com/dms/image/v2/D4D03AQEX_J1EwNBLVQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1711562619187?e=1734566400&v=beta&t=duhfgTaJ-xkqZ9kz9MjXZ6GrCE2NEDzBsvNEUfG9_70',
          linkedin: 'https://www.linkedin.com/in/almogdror/',
           whatsApp : 'https://wa.me/972545999731'
        },
        {
          name: 'אורי דגן', role: 'מומחה לפיתוח עסקי', image: 'https://media.licdn.com/dms/image/v2/D4D03AQExXkJA2OLf5g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1665434051000?e=1734566400&v=beta&t=r4z0GnrtZ4aKDHD0cPXtdS4HzPXBxrionmswpAJ4lJE',
          linkedin: 'https://www.linkedin.com/in/ori-dagan-856078251/',
           whatsApp : 'https://wa.me/972543191601'
        },
        {
          name: 'יובל חן', role: ' מומחה אוטומציות ופיתוח אתרים', image: 'https://media.licdn.com/dms/image/v2/D5603AQEPvEOHQRDJBQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1700061564317?e=1734566400&v=beta&t=lrQQqLnEu84_RR45FpWZEsFx-J29ZvwzrC0chvntNqo',
          linkedin: 'https://www.linkedin.com/in/yuval-chen/',
           whatsApp : 'https://wa.me/972546830556'
        }],
      testimonial: '"גם לכם האקסל מראה ש1/2= הראשון לפברואר? הגיע הזמן להבין איך להשתמש באקסל"',
      ctaTitle: '?מוכנים להצמיח את העסק שלכם בעזרת האקסל',
      ctaText: ".בואו נדבר איך נוכל לעזור לכם לייעל את תהליכי העבודה באקסל ולהגביר את היעילות שלכם",
      scheduleConsultation: 'קבעו שיחת ייעוץ חינם',
      contactInfo: 'Contact: dalmog123@gmail.com | Phone: (+972) 54-5999731',
      formSubmitted: '.תודה! ההודעה שלך נשלחה',
      formError: '.אופס! אירעה שגיאה בשליחת ההודעה. אנא נסה שנית',
      formTimeError : 'אינך מורשה לשלוח הודעה כרגע. אנא המתן דקה ולאחר מכן שלח שוב.',
      excelExamplesTitle: 'דוגמאות לנוסחאות אקסל',
      excelExamples: [
        {
          formula: '=INDEX(reference, MATCH(search_key, range, search_type), [MATCH(search_key, range, search_type)])',
          title: 'שילוב INDEX-MATCH',
          description: 'במצבים בהם שימוש בפונקציית החיפוש האנכי או אופקי לא עובד, ניתן להשתמש בשילוב הזה כדי למצוא מידע גם במערך דו מימדי',
        },
        {
          formula: '=SUMIFS(sum_range, criteria_range1, criteria1, [criteria_range2, criteria2, ...])',
          title: 'SUMIFS לקריטריונים מרובים',
          description: 'SUMIFS מאפשר לסכום ערכים העומדים במספר קריטריונים. מצוין ליצירת דוחות דינמיים וניתוח נתונים על בסיס תנאים שונים.',
        },
        {
          formula: '=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])',
          title: 'VLOOKUP לחיפושים אנכיים',
          description: 'VLOOKUP משמש למציאת נתונים בטבלה או טווח לפי שורה. מושלם לאחזור מידע ממסדי נתונים גדולים על בסיס ערך חיפוש ספציפי.',
        },
        {
          formula: '=FILTER(array, include, [if_empty])',
          title: 'FILTER לחילוץ נתונים דינמי',
          description: 'פונקציית FILTER מאפשרת לחלץ נתונים העומדים בקריטריונים ספציפיים. כלי חזק ליצירת דוחות דינמיים מבוססי קריטריונים.',
        },
        {
          formula: '=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode], [search_mode])',
          title: 'XLOOKUP לחיפושים מתקדמים',
          description: 'XLOOKUP הוא יורש חזק וגמיש יותר ל-VLOOKUP. הוא יכול לחפש אנכית ואופקית, ואפילו בסדר הפוך.',
        },
        {
          formula: '=SUMPRODUCT((criteria_range1=criteria1)*(criteria_range2=criteria2)*value_range)',
          title: 'SUMPRODUCT  לחישובים מורכבים',
          description: 'SUMPRODUCT יכול לבצע חישובים מורכבים הכוללים קריטריונים וטווחים מרובים. מצוין לסיכום ערכים על בסיס תנאים מרובים ללא עמודות עזר.',
        },
        {
          formula: '=IFERROR(value, value_if_error)',
          title: 'IFERROR לטיפול בשגיאות',
          description: 'IFERROR משמש ללכידת שגיאות בנוסחאות וטיפול בהן. שימושי לשמירה על גיליונות נקיים ומקצועיים על ידי הצגת הודעות מותאמות אישית במקום ערכי שגיאה.',
        },
        {
          formula: '=LET(name1, value1, name2, value2, ..., calculation)',
          title: 'LET לשיום חלקים בנוסחה',
          description: 'פונקציית LET מאפשרת להקצות שמות לתוצאות חישוב. זה יכול להפוך נוסחאות מורכבות לקריאות יותר וקלות יותר לניפוי באגים.',
        },
      ],
    },
  }

  const handleScroll = (target) => {
    console.log(`Scrolling to ${target}`); // Debugging line
    const element = document.querySelector(target);
    if (element) {
      const headerOffset = 65; // Adjust this based on your header height
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
  
      // Prevent default anchor behavior
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };
  
  // Optional: Use a useEffect to handle clicks and prevent conflicts
  useEffect(() => {
    const handleClick = (event) => {
      const target = event.currentTarget.getAttribute('href');
      handleScroll(target);
      event.preventDefault(); // Prevent default anchor behavior
    };
  
    const links = document.querySelectorAll('a[href^="#"]'); // Select all anchor links
    links.forEach((link) => {
      link.addEventListener('click', handleClick);
    });
  
    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, []);
  
  
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
        // Create a document reference using the email as the document ID
        const docRef = doc(db, 'contacts', data.email); // Use the email as the document ID

        // Save or update the form data in Firestore
        await setDoc(docRef, {
            name: data.name,
            email: data.email,
            message: data.message,
            timestamp: Timestamp.now(), // Ensure Firestore Timestamp is used
        }, { merge: true }); // Merge to update fields instead of overwriting completely

        // Set success status
        setFormStatus('success');
    } catch (error) {
        console.error('Error saving to Firestore:', error);
        setFormStatus('error');
    }
};


  return (
    <div className={`font-sans text-gray-900 ${language === 'he' ? 'rtl' : 'ltr'} overflow-x-hidden`}>
      {/* Header */}
      <Header text={text} language={language} handleScroll={handleScroll} toggleLanguage={toggleLanguage} toggleMenu={toggleMenu} isMenuOpen={isMenuOpen}></Header>

      {/* Mobile Menu */}
      <MobileMenu
        isMenuOpen={isMenuOpen}
        handleScroll={handleScroll}
        toggleMenu={toggleMenu}
        text={text}
        language={language}
        toggleLanguage={toggleLanguage}
      />
      {/* Hero Section */}
      <Hero text={text} language={language} opacity={opacity} scale={scale} />

      {/* Services Section */}
      <Services text={text} language={language} />

      {/* Benefits Section */}
      <Benefits text={text} language={language} />

      {/* CTA Section */}
      <CTA text={text} language={language} schedulingLink={schedulingLink} />

      {/* Team Section */}
      <Team text={text} language={language} />

      {/* Contact Section */}
      <ContactUs
        text={text}
        language={language}
        handleSubmit={handleSubmit}
        formStatus={formStatus}
      />

      {/* Excel Examples Section */}
      <ExcelExamples
        text={text}
        language={language}
        currentExample={currentExample}
        setCurrentExample={setCurrentExample}
      />

      {/* Footer */}
     <Footer></Footer>
    </div>
  )
}