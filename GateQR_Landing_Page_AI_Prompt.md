# GateQR Landing Page — AI Coding Prompt

## Role

You are a senior frontend engineer and UI/UX designer. Build a production-quality, modern, responsive **static landing page** for a software product called:

**GateQR Manager**
Arabic brand: **بوابة QR**

The page is ONLY a marketing/download landing page. Do NOT build a backend, database, API, authentication system, dashboard, admin panel, or registration flow.

---

# 1. Main Goal

The landing page introduces GateQR Manager, a system for:

- Managing events and guest lists.
- Creating and printing QR invitation cards.
- Scanning QR codes at event entrances.
- Preventing duplicate ticket entry.
- Managing multiple gate/scanner devices.
- Viewing live attendance statistics.
- Using a Windows Desktop application for event management.
- Using an Android application for gate scanning.

The primary conversion is **downloading the software**, not creating an account.

The user should be able to click a download button immediately and download the application.

After downloading/installing the application, the user will discover that an account is required. The application itself handles login.

The landing page should clearly tell users:

> No account? Contact Administration.

Provide a WhatsApp contact button for users who need an account.

---

# 2. Critical Constraint

This is a STATIC LANDING PAGE.

Do NOT add:

- Database
- SQL
- Prisma
- MongoDB
- Firebase
- Supabase
- Backend routes
- API calls
- User registration
- Login forms on the website
- Admin dashboard
- Authentication
- Server-side user management
- Complex CMS
- Unnecessary state management

The only external action required is opening/downloading application files and opening WhatsApp.

Use simple configurable constants for download URLs and WhatsApp contact information.

Example configuration:

```js
const DOWNLOADS = {
  desktop: "DESKTOP_DOWNLOAD_URL",
  android: "ANDROID_APK_DOWNLOAD_URL",
};

const WHATSAPP_NUMBER = "YOUR_WHATSAPP_NUMBER";
```

Make these values very easy to replace later.

---

# 3. Languages

The landing page MUST support:

- English
- Arabic

Default language: English.

Add a language switcher:

**EN | العربية**

When Arabic is selected:

- Entire page changes to RTL.
- Text alignment becomes right-to-left.
- Navigation direction changes appropriately.
- Cards and layouts remain visually correct.
- Icons/arrows should adapt where necessary.
- Arabic typography should look professional.

Do NOT simply translate English text mechanically. Write natural professional Arabic marketing copy.

Persist the selected language using localStorage if the project already supports client-side JavaScript.

If the existing project has its own localization system, integrate with it instead of creating a conflicting system.

---

# 4. Brand / Visual Identity

Brand:

**GateQR Manager**

Arabic:

**بوابة QR**

Visual direction:

- Premium
- Modern
- Professional
- Technology-focused
- Event-management SaaS aesthetic
- Clean
- Trustworthy
- Fast
- Minimal but visually impressive

Suggested color palette:

- Primary: Orange
- Secondary: Dark charcoal / near-black
- Background: White and very light gray
- Success: Green
- Error: Red
- Text: Dark charcoal
- Muted text: Gray

Use orange as an accent rather than flooding the entire page with orange.

Suggested visual feel:

- Rounded cards
- Subtle shadows
- Soft gradients
- Clean spacing
- Strong typography
- Smooth hover states
- Modern icons
- Subtle animations
- Professional dashboard/software visuals

Do not make it look like a generic template.

---

# 5. Hero Section

Create a strong hero section immediately visible on desktop and mobile.

Headline:

### English

**Smart Event Management. Fast QR Entry.**

Supporting headline:

**Manage invitations, print QR cards, and verify guest entry in seconds — all from one powerful system.**

Arabic:

**إدارة ذكية للمناسبات. ودخول سريع عبر QR.**

Supporting Arabic:

**أدر الدعوات، اطبع بطاقات QR، وتحقق من دخول الضيوف خلال ثوانٍ — كل ذلك من خلال منظومة واحدة متكاملة.**

Primary CTA:

**Download the System**

Secondary CTA:

**Contact Administration**

The primary button should start the download.

The secondary button opens WhatsApp.

Add a small trust/value line:

**Fast • Secure • Multi-Gate • Easy to Use**

Arabic:

**سريع • آمن • متعدد البوابات • سهل الاستخدام**

Hero should include a visually attractive product mockup / abstract representation of:

- Desktop control panel
- Mobile QR scanner
- QR invitation card

If actual product screenshots exist in the project, use them. Do not invent fake screenshots if real assets are available.

---

# 6. Download Behavior

The landing page should have direct download buttons.

Desktop:

**Download Windows App**

Android:

**Download Android App**

When clicked:

- Navigate directly to the configured download URL.
- Do not show a registration page.
- Do not require an account on the landing page.

If the download URL is not configured yet, use a clear placeholder constant rather than inventing a URL.

Make the download buttons visually prominent.

---

# 7. Important Account Message

Create a dedicated small section near the download area:

### English

**Need an account?**

The application requires an active account to sign in.

Don't have an account yet?

**Contact Administration**

Button:

**Contact us on WhatsApp**

Arabic:

**هل تحتاج إلى حساب؟**

**يتطلب التطبيق حسابًا فعالًا لتسجيل الدخول.**

**ليس لديك حساب؟**

**تواصل مع الإدارة**

Button:

**التواصل عبر WhatsApp**

The WhatsApp button should open:

```text
https://wa.me/WHATSAPP_NUMBER
```

Use the configurable WhatsApp number constant.

---

# 8. Core Features

Create a modern feature section.

Title:

**Everything You Need to Manage Your Event**

Arabic:

**كل ما تحتاجه لإدارة مناسبتك**

Features:

### 1. Guest Management

Import and manage guest lists quickly.

Arabic:

**إدارة الضيوف**

استيراد قوائم الضيوف وإدارتها بسهولة وسرعة.

### 2. QR Invitations

Generate unique QR codes for invitations and tickets.

Arabic:

**دعوات QR**

إنشاء رموز QR فريدة للدعوات والتذاكر.

### 3. Fast Gate Scanning

Scan guest QR codes quickly using Android devices.

Arabic:

**فحص سريع عند البوابة**

مسح رموز QR بسرعة باستخدام أجهزة Android.

### 4. Duplicate Entry Protection

Prevent the same invitation from being used more than once.

Arabic:

**الحماية من التكرار**

منع استخدام الدعوة نفسها أكثر من مرة.

### 5. Live Attendance

Know how many guests entered and how many remain.

Arabic:

**إحصائيات الحضور المباشرة**

معرفة عدد الحاضرين وحالة الدخول بشكل فوري.

### 6. Multi-Gate Support

Allow multiple scanners to work at the same event.

Arabic:

**دعم تعدد البوابات**

تشغيل عدة أجهزة فحص في المناسبة نفسها.

---

# 9. Desktop + Mobile Section

Create a strong two-column section.

## Desktop Control Hub

Title:

**Powerful Desktop Control**

Description:

Manage your event from your Windows computer.

Include:

- Guest list management
- Event management
- QR generation
- Invitation printing
- Attendance statistics
- Gate/employee management

Arabic:

**تحكم كامل من الكمبيوتر**

إدارة مناسبتك من جهاز Windows بكل سهولة.

- إدارة قوائم الضيوف
- إدارة المناسبات
- إنشاء رموز QR
- طباعة بطاقات الدعوة
- إحصائيات الحضور
- إدارة البوابات والمنظمين

CTA:

**Download Windows App**

## Mobile Gate Scanner

Title:

**Fast Mobile Gate Scanner**

Description:

Turn Android phones into fast and reliable event scanners.

Include:

- Fast camera scanning
- Clear interface
- Instant validation
- Duplicate detection
- Multiple devices
- Simple operation

Arabic:

**ماسح البوابة عبر الجوال**

حوّل أجهزة Android إلى ماسحات سريعة وموثوقة للدخول.

CTA:

**Download Android App**

---

# 10. How It Works

Create a 3-step visual process.

### Step 1

**Create Your Event**

Set up your event and guest list.

Arabic:

**أنشئ مناسبتك**

أنشئ المناسبة وأضف قائمة الضيوف.

### Step 2

**Generate & Print QR Invitations**

Create unique QR invitations and print or share them.

Arabic:

**أنشئ واطبع دعوات QR**

أنشئ دعوات QR فريدة واطبعها أو شاركها.

### Step 3

**Scan & Verify**

Scan the QR code at the gate and instantly verify entry.

Arabic:

**امسح وتحقق**

امسح الرمز عند البوابة وتحقق من الدخول فورًا.

Visual flow:

Create → Invite → Scan

---

# 11. Security Section

Create a visually strong security section.

Title:

**Built for Secure Event Entry**

Arabic:

**مصمم لدخول آمن ومنظم**

Points:

- Unique QR invitations
- Duplicate-use protection
- Real-time validation
- Multi-device synchronization
- Controlled access

Explain duplicate protection in simple marketing language.

Do not expose implementation details such as database locks, SQL transactions, or technical backend architecture.

The landing page is for customers, not developers.

---

# 12. Who Is It For?

Create four attractive cards:

### Event & Exhibition Organizers

Manage large guest lists and entrance gates.

### Wedding & Event Venues

Control private invitations and guest entry.

### Universities

Manage graduation ceremonies and guest access.

### Companies & Organizations

Manage internal events and VIP invitations.

Arabic translations:

- شركات تنظيم الفعاليات والمعارض
- قاعات الأفراح والمناسبات
- الجامعات والمعاهد
- الشركات والمؤسسات

---

# 13. FAQ

Create an accordion FAQ.

Questions:

### Does GateQR require an account?

English:

Yes. The application requires an active account. If you don't have one, contact the administration.

Arabic:

نعم. يتطلب التطبيق حسابًا فعالًا. إذا لم يكن لديك حساب، تواصل مع الإدارة.

### Can multiple phones scan at the same event?

Yes. Multiple Android devices can be used at different gates.

Arabic:

نعم، يمكن استخدام عدة أجهزة Android في بوابات مختلفة للمناسبة نفسها.

### Does it support Windows?

Yes. GateQR includes a Windows desktop application for event management.

Arabic:

نعم، تتوفر نسخة Windows لإدارة المناسبات والضيوف.

### Can I print QR invitations?

Yes. The desktop application supports QR invitation generation and printing.

Arabic:

نعم، تدعم نسخة الكمبيوتر إنشاء وطباعة بطاقات الدعوة التي تحتوي على QR.

### How can I get an account?

Contact the administration through WhatsApp.

Arabic:

تواصل مع الإدارة عبر WhatsApp للحصول على حساب.

---

# 14. Final CTA

Create a strong final conversion section.

English:

**Ready to simplify your event entrance?**

Download GateQR Manager and start managing your event with speed, security, and confidence.

Buttons:

**Download Windows App**

**Download Android App**

**Contact Administration**

Arabic:

**جاهز لتنظيم دخول مناسبتك بشكل أفضل؟**

حمّل GateQR Manager وابدأ إدارة مناسبتك بسرعة وأمان وسهولة.

---

# 15. Footer

Include:

**GateQR Manager**

**Smart event management and QR entry system.**

Links:

- Home
- Features
- How It Works
- FAQ
- Download
- Contact

Include:

**© 2026 GateQR Manager. All rights reserved.**

Arabic:

**© 2026 GateQR Manager. جميع الحقوق محفوظة.**

Include WhatsApp contact.

---

# 16. Responsive Design

The page MUST be fully responsive.

Desktop:

- Wide hero
- Two-column product sections
- Feature grid
- Spacious layout

Tablet:

- Adaptive grids
- Proper spacing

Mobile:

- Single-column layout
- Large readable buttons
- Sticky/mobile-friendly navigation if appropriate
- No horizontal scrolling
- Hero image/mockup scales correctly
- Download buttons should be easy to tap
- Language switcher remains accessible

Test at:

- 1920px
- 1440px
- 1024px
- 768px
- 430px
- 390px
- 360px

---

# 17. Navigation

Desktop navigation:

**GateQR Manager**

- Home
- Features
- How It Works
- FAQ
- Download

Right side:

**EN | العربية**

CTA:

**Download**

On Arabic:

- Proper RTL navigation
- Arabic labels

Mobile:

Use a clean hamburger menu if needed.

---

# 18. Animations

Use subtle professional animations:

- Fade-in on scroll
- Slight card hover movement
- Button hover effects
- Smooth scrolling
- Hero visual floating effect
- FAQ accordion animation

Do NOT over-animate.

The website must remain fast.

Respect `prefers-reduced-motion`.

---

# 19. SEO

Add:

- Proper `<title>`
- Meta description
- Open Graph metadata
- Semantic headings
- Accessible alt text
- Proper button labels

Suggested title:

**GateQR Manager | Smart Event Management & QR Entry**

Arabic:

**GateQR Manager | منظومة إدارة المناسبات والدخول عبر QR**

Suggested description:

**Manage events, QR invitations, guest lists, and secure event entry with GateQR Manager.**

Arabic:

**أدر مناسباتك ودعوات QR وقوائم الضيوف والدخول الآمن بسهولة عبر GateQR Manager.**

---

# 20. Accessibility

Follow accessibility best practices:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Good contrast
- ARIA labels where necessary
- Buttons must be actual buttons/links
- Images must have meaningful alt text
- Do not rely only on color to communicate status

---

# 21. Technical Requirements

First inspect the existing project.

Determine:

- Framework
- Existing CSS system
- Existing component structure
- Existing routing
- Existing assets
- Existing fonts
- Existing localization system

Then integrate the landing page into the existing architecture.

Do NOT unnecessarily replace the project's framework or dependencies.

If the project is Next.js, use appropriate Next.js components and metadata.

If React/Vite, use React components.

If plain HTML/CSS/JS, keep it lightweight.

Use the project's existing styling solution if one exists.

---

# 22. Code Quality

Organize the page into reusable sections/components:

- Navbar
- Hero
- DownloadButtons
- Features
- DesktopSection
- MobileScannerSection
- HowItWorks
- Security
- TargetAudience
- FAQ
- FinalCTA
- Footer
- LanguageSwitcher

Avoid one giant component.

Keep download URLs and WhatsApp number in one configuration file.

Example:

```js
export const appConfig = {
  brandName: "GateQR Manager",
  whatsappNumber: "YOUR_WHATSAPP_NUMBER",
  downloads: {
    windows: "YOUR_WINDOWS_DOWNLOAD_URL",
    android: "YOUR_ANDROID_APK_URL",
  },
};
```

Do not hard-code the WhatsApp number throughout the UI.

---

# 23. Important Product Logic

Remember:

The landing page does NOT create accounts.

The landing page does NOT contain login.

The landing page does NOT communicate with a backend.

The landing page does NOT store customer information.

The application itself handles authentication.

The landing page only:

1. Explains the product.
2. Allows Windows download.
3. Allows Android download.
4. Provides WhatsApp contact for account requests.
5. Supports English and Arabic.

This simplicity is intentional.

---

# 24. Final Quality Standard

The finished page should look like a real commercial software product, not a student project.

Prioritize:

- Excellent visual hierarchy
- Premium UI
- Strong typography
- Professional spacing
- High-quality responsive behavior
- Clear CTAs
- Fast performance
- Arabic RTL quality
- English quality
- Simple download flow

Do not add unnecessary features.

Do not create a backend.

Do not create a database.

Do not create registration.

Do not create login.

Build the landing page and make it production-ready.
