# Credit Docket Generator

A React-based web application for generating professional credit assessment dockets for educational loan processing. This tool provides an intuitive form interface with real-time preview and PDF export capabilities.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19.2.0-61dafb.svg)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646cff.svg)

## 📋 Overview

The Credit Docket Generator streamlines the creation of standardized credit assessment documents for educational loan applications. It features a split-screen interface with form inputs on the left and a live preview of the generated docket on the right, allowing users to see changes in real-time.

## ✨ Features

- **Real-time Preview**: See your docket update instantly as you fill in the form
- **PDF Export**: Download professional PDF documents with a single click
- **Responsive Design**: Works seamlessly on desktop and tablet devices
- **Form Validation**: Built with React Hook Form and Zod for robust validation
- **Modern UI**: Clean, professional interface built with Tailwind CSS
- **Split-screen Layout**: Form inputs and preview side-by-side for efficient workflow

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/dizayn3r/credit-docket-generator.git
cd credit-docket-generator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Build the production-ready application |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🏗️ Project Structure

```
credit-docket-generator/
├── src/
│   ├── components/
│   │   ├── forms/
│   │   │   ├── HeaderForm.jsx          # Header information form
│   │   │   ├── BasicDetailsForm.jsx    # Basic loan details form
│   │   │   └── CourseDetailsForm.jsx   # Course information form
│   │   └── preview/
│   │       ├── DocketPreview.jsx       # Main preview component
│   │       ├── DocumentHeaderPreview.jsx
│   │       ├── BasicDetailsPreview.jsx
│   │       ├── CourseDetailsPreview.jsx
│   │       ├── theme.js                # Theme configuration
│   │       └── typography.js           # Typography utilities
│   ├── App.jsx                         # Main application component
│   ├── App.css                         # Application styles
│   ├── main.jsx                        # Application entry point
│   └── index.css                       # Global styles
├── public/                             # Static assets
├── index.html                          # HTML template
├── package.json                        # Project dependencies
├── vite.config.js                      # Vite configuration
├── tailwind.config.js                  # Tailwind CSS configuration
└── eslint.config.js                    # ESLint configuration
```

## 🛠️ Technology Stack

### Core
- **React 19.2.0** - UI library
- **Vite 7.2.4** - Build tool and dev server

### Styling
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **@tailwindcss/vite** - Tailwind CSS Vite plugin

### Form Management
- **React Hook Form 7.71.1** - Performant form validation
- **Zod 4.3.6** - TypeScript-first schema validation

### PDF Generation
- **jsPDF 4.0.0** - PDF document generation
- **html2canvas 1.4.1** - HTML to canvas conversion
- **docx 9.5.1** - Document generation library
- **file-saver 2.0.5** - File download utility

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📝 Usage

1. **Fill in Header Information**:
   - Title (e.g., "ELSC, New Delhi")
   - Subtitle (e.g., "Movement Chart / Processing Note")
   - Academic Year

2. **Enter Basic Details**:
   - LLPS ID
   - Account Name
   - Docket Number
   - Lead Information
   - Contact Details
   - Loan Facility Details
   - Loan Amount and Course Fees
   - Eligibility and Insurance Information

3. **Add Course Details**:
   - Course Name
   - Institute Information
   - Commencement Date
   - Security and Margin Details
   - Interest Rates
   - Moratorium Period
   - Expected Income
   - Loan Tenure

4. **Download PDF**:
   - Click the "📥 Download PDF" button to export your docket

## 🎨 Customization

### Modifying Theme Colors

Edit the theme configuration in `src/components/preview/theme.js`:

```javascript
export const theme = {
  primary: "#0d9488",    // Teal color
  border: "#d1d5db",     // Gray border
  // Add more theme colors as needed
};
```

### Adjusting Typography

Customize text styles in `src/components/preview/typography.js`.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Applore Technologies**

- GitHub: [@dizayn3r](https://github.com/dizayn3r)

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Form validation powered by [React Hook Form](https://react-hook-form.com/) and [Zod](https://zod.dev/)

## 📞 Support

For support, please open an issue in the GitHub repository or contact the development team.

---

**Note**: This application is designed for educational loan docket generation and should be used in accordance with your organization's policies and procedures.
