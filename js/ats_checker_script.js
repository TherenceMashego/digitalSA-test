// Role Data
const roleData = {
    engineering: {
        name: "Engineering/IT",
        roles: [
            {
                value: "frontend",
                name: "Frontend Developer",
                keywords: ["JavaScript", "React", "CSS", "HTML", "UI/UX", "Responsive Design", "Vue", "Angular"]
            },
            {
                value: "backend",
                name: "Backend Developer",
                keywords: ["Node.js", "Python", "Java", "API", "Database", "SQL", "NoSQL", "Express"]
            },
            {
                value: "fullstack",
                name: "Full Stack Developer",
                keywords: ["JavaScript", "React", "Node.js", "MongoDB", "API", "Full-stack", "Database"]
            },
            {
                value: "devops",
                name: "DevOps Engineer",
                keywords: ["CI/CD", "Docker", "Kubernetes", "AWS", "Azure", "Terraform", "Jenkins", "Infrastructure"]
            },
            {
                value: "cloud",
                name: "Cloud Engineer",
                keywords: ["AWS", "Azure", "GCP", "Cloud Architecture", "Serverless", "IaC", "Containers"]
            },
            {
                value: "data",
                name: "Data Engineer",
                keywords: ["ETL", "SQL", "Python", "Data Warehouse", "Big Data", "Hadoop", "Spark", "Data Pipelines"]
            },
        ]
    },
    marketing: {
        name: "Marketing",
        roles: [
            {
                value: "digital",
                name: "Digital Marketing Specialist",
                keywords: ["SEO", "SEM", "Google Analytics", "Social Media", "Content Strategy", "Email Marketing"]
            },
            {
                value: "content",
                name: "Content Marketing Manager",
                keywords: ["Content Strategy", "Blog Management", "Editorial", "SEO Writing", "Storytelling"]
            },
            {
                value: "social",
                name: "Social Media Manager",
                keywords: ["Facebook", "Instagram", "Twitter", "LinkedIn", "Community Management", "Engagement"]
            },
            {
                value: "seo",
                name: "SEO Specialist",
                keywords: ["Keyword Research", "On-page SEO", "Technical SEO", "Link Building", "Google Analytics"]
            },
        ]
    },
    sales: {
        name: "Sales",
        roles: [
            {
                value: "account",
                name: "Account Executive",
                keywords: ["B2B Sales", "Client Relationships", "Deal Closing", "Pipeline Management", "Negotiations"]
            },
            {
                value: "business",
                name: "Business Development Representative",
                keywords: ["Lead Generation", "Prospecting", "Outbound Sales", "Cold Calling", "Sales Funnel"]
            },
            {
                value: "sales_manager",
                name: "Sales Manager",
                keywords: ["Team Leadership", "Sales Strategy", "Revenue Growth", "Coaching", "Performance Metrics"]
            },
        ]
    },
    finance: {
        name: "Finance",
        roles: [
            {
                value: "financial_analyst",
                name: "Financial Analyst",
                keywords: ["Financial Modeling", "Forecasting", "Excel", "Data Analysis", "Budgeting", "Reporting"]
            },
            {
                value: "accountant",
                name: "Accountant",
                keywords: ["GL", "GAAP", "Financial Statements", "Month-end Close", "Reconciliation", "Tax"]
            },
            {
                value: "controller",
                name: "Controller",
                keywords: ["Financial Management", "Reporting", "Compliance", "Internal Controls", "Risk Management"]
            },
        ]
    },
    hr: {
        name: "Human Resources",
        roles: [
            {
                value: "recruiter",
                name: "Recruiter",
                keywords: ["Talent Acquisition", "Sourcing", "Interviews", "Onboarding", "ATS", "Candidate Screening"]
            },
            {
                value: "hr_generalist",
                name: "HR Generalist",
                keywords: ["Employee Relations", "Benefits", "Policies", "Compliance", "HRIS", "Onboarding"]
            },
            {
                value: "hr_manager",
                name: "HR Manager",
                keywords: ["Team Leadership", "Strategy", "Employee Development", "Organizational Development"]
            },
        ]
    },
    healthcare: {
        name: "Healthcare",
        roles: [
            {
                value: "nurse",
                name: "Registered Nurse",
                keywords: ["Patient Care", "Clinical Skills", "EMR", "Medication Administration", "CPR Certified"]
            },
            {
                value: "physician",
                name: "Physician",
                keywords: ["Diagnosis", "Treatment Planning", "Patient Education", "Medical Records", "HIPAA Compliance"]
            },
            {
                value: "healthcare_admin",
                name: "Healthcare Administrator",
                keywords: ["Healthcare Management", "Regulatory Compliance", "Quality Improvement", "Patient Safety"]
            },
        ]
    },
    education: {
        name: "Education",
        roles: [
            {
                value: "teacher",
                name: "Teacher",
                keywords: ["Lesson Planning", "Classroom Management", "Student Assessment", "Differentiated Instruction", "Curriculum Development"]
            },
            {
                value: "professor",
                name: "Professor",
                keywords: ["Lecturing", "Research", "Academic Advising", "Curriculum Development", "Student Mentoring"]
            },
            {
                value: "administrator",
                name: "School Administrator",
                keywords: ["Educational Leadership", "Program Evaluation", "Staff Management", "Budgeting", "Policy Development"]
            },
        ]
    }
};

// DOM Elements
const elements = {
    // Navigation
    mobileMenuBtn: document.querySelector('.mobile-menu-btn'),
    navLinks: document.querySelector('.nav-links'),

    // Role Selection
    departmentSelect: document.getElementById('department'),
    roleSelect: document.getElementById('role'),
    roleNextBtn: document.getElementById('role-next-btn'),
    roleBackBtn: document.getElementById('role-back-btn'),
    roleSelection: document.getElementById('role-selection'),

    // Resume Upload
    uploadArea: document.getElementById('upload-area'),
    resumeFile: document.getElementById('resume-file'),
    fileInfo: document.getElementById('file-info'),
    fileName: document.getElementById('file-name'),
    removeFile: document.getElementById('remove-file'),
    resumeText: document.getElementById('resume-text'),
    resumeBackBtn: document.getElementById('resume-back-btn'),
    analyzeBtn: document.getElementById('analyze-btn'),
    resumeUpload: document.getElementById('resume-upload'),

    // Loading
    loadingState: document.getElementById('loading-state'),

    // Results
    resultsSection: document.getElementById('results-section'),
    overallScore: document.getElementById('overall-score'),
    scoreDescription: document.getElementById('score-description'),
    keywordMatch: document.getElementById('keyword-match'),
    wordCount: document.getElementById('word-count'),
    roleRelevance: document.getElementById('role-relevance'),
    selectedDept: document.getElementById('selected-dept'),
    selectedRole: document.getElementById('selected-role'),
    analysisDate: document.getElementById('analysis-date'),

    // Gauges
    overallGauge: document.getElementById('overall-gauge'),
    keywordGauge: document.getElementById('keyword-gauge'),
    formattingGauge: document.getElementById('formatting-gauge'),
    contentGauge: document.getElementById('content-gauge'),

    // Scores
    keywordScore: document.getElementById('keyword-score'),
    formattingScore: document.getElementById('formatting-score'),
    contentScore: document.getElementById('content-score'),

    // Strengths & Improvements
    keywordStrengths: document.getElementById('keyword-strengths'),
    keywordImprovements: document.getElementById('keyword-improvements'),
    formattingStrengths: document.getElementById('formatting-strengths'),
    formattingImprovements: document.getElementById('formatting-improvements'),
    contentStrengths: document.getElementById('content-strengths'),
    contentImprovements: document.getElementById('content-improvements'),

    // Keywords
    keywordsList: document.getElementById('keywords-list'),
    keywordsFoundCount: document.getElementById('keywords-found-count'),
    keywordsTotalCount: document.getElementById('keywords-total-count'),

    // Action Buttons
    startOverBtn: document.getElementById('start-over-btn'),
    printResultsBtn: document.getElementById('print-results-btn'),
    saveResultsBtn: document.getElementById('save-results-btn')
};

// State
const state = {
    currentStep: 1,
    department: null,
    role: null,
    resumeFile: null,
    resumeText: '',
    analysisResults: null
};

// Initialize
document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    elements.mobileMenuBtn.addEventListener('click', function () {
        elements.navLinks.classList.toggle('active');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Close mobile menu if open
            if (elements.navLinks.classList.contains('active')) {
                elements.navLinks.classList.remove('active');
            }
        });
    });

    // Department selection
    elements.departmentSelect.addEventListener('change', function () {
        const dept = this.value;
        state.department = dept;

        // Clear and disable role select
        elements.roleSelect.innerHTML = '<option value="" selected disabled>Select a role</option>';
        elements.roleSelect.disabled = !dept;

        if (dept) {
            // Populate roles
            const roles = roleData[dept].roles;
            roles.forEach(role => {
                const option = document.createElement('option');
                option.value = role.value;
                option.textContent = role.name;
                elements.roleSelect.appendChild(option);
            });
        }

        // Disable next button until role is selected
        elements.roleNextBtn.disabled = true;
    });

    // Role selection
    elements.roleSelect.addEventListener('change', function () {
        state.role = this.value;
        elements.roleNextBtn.disabled = !this.value;
    });

    // Role next button
    elements.roleNextBtn.addEventListener('click', function () {
        goToStep(2);
    });

    // Role back button
    elements.roleBackBtn.addEventListener('click', function () {
        goToStep(1);
    });

    // Resume back button
    elements.resumeBackBtn.addEventListener('click', function () {
        goToStep(1);
    });

    // File upload handling
    elements.uploadArea.addEventListener('click', function () {
        elements.resumeFile.click();
    });

    elements.uploadArea.addEventListener('dragover', function (e) {
        e.preventDefault();
        elements.uploadArea.classList.add('dragover');
    });

    elements.uploadArea.addEventListener('dragleave', function () {
        elements.uploadArea.classList.remove('dragover');
    });

    elements.uploadArea.addEventListener('drop', function (e) {
        e.preventDefault();
        elements.uploadArea.classList.remove('dragover');

        if (e.dataTransfer.files.length) {
            handleFileSelect(e.dataTransfer.files[0]);
        }
    });

    elements.resumeFile.addEventListener('change', function (e) {
        if (e.target.files.length) {
            handleFileSelect(e.target.files[0]);
        }
    });

    elements.removeFile.addEventListener('click', function () {
        state.resumeFile = null;
        elements.resumeFile.value = '';
        elements.fileInfo.style.display = 'none';
        checkResumeInput();
    });

    // Resume text input
    elements.resumeText.addEventListener('input', function () {
        state.resumeText = this.value;
        checkResumeInput();
    });

    // Analyze button
    elements.analyzeBtn.addEventListener('click', function () {
        if (state.resumeFile || state.resumeText.trim()) {
            startAnalysis();
        }
    });

    // Start over button
    elements.startOverBtn.addEventListener('click', function () {
        resetForm();
        goToStep(1);
    });

    // Print results button
    elements.printResultsBtn.addEventListener('click', function () {
        window.print();
    });

    // Save results button
    elements.saveResultsBtn.addEventListener('click', function () {
        alert('Analysis saved! (This would save to localStorage in a real implementation)');
    });
});

// Helper Functions
function handleFileSelect(file) {
    // Check file type
    const validTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const fileExt = file.name.split('.').pop().toLowerCase();

    if (!validTypes.includes(file.type) && !['pdf', 'docx'].includes(fileExt)) {
        alert('Please upload a PDF or DOCX file.');
        return;
    }

    // Store file and show info
    state.resumeFile = file;
    elements.fileName.textContent = file.name;
    elements.fileInfo.style.display = 'block';

    // Enable analyze button if we have content
    checkResumeInput();
}

function checkResumeInput() {
    const hasFile = state.resumeFile !== null;
    const hasText = elements.resumeText.value.trim().length > 0;
    elements.analyzeBtn.disabled = !(hasFile || hasText);
}

function goToStep(step) {
    state.currentStep = step;

    // Update step navigation
    document.querySelectorAll('.step').forEach((stepEl, index) => {
        if (index + 1 < step) {
            stepEl.classList.add('completed');
            stepEl.classList.remove('active');
        } else if (index + 1 === step) {
            stepEl.classList.add('active');
            stepEl.classList.remove('completed');
        } else {
            stepEl.classList.remove('active', 'completed');
        }
    });

    // Update step connectors
    document.querySelectorAll('.step-connector').forEach((connector, index) => {
        if (index + 1 < step) {
            connector.classList.add('completed');
        } else {
            connector.classList.remove('completed');
        }
    });

    // Show/hide sections
    elements.roleSelection.style.display = step === 1 ? 'block' : 'none';
    elements.resumeUpload.style.display = step === 2 ? 'block' : 'none';
    elements.loadingState.style.display = step === 3 ? 'block' : 'none';
    elements.resultsSection.style.display = step === 4 ? 'block' : 'none';

    // Show/hide back buttons
    elements.roleBackBtn.style.display = step === 2 ? 'inline-flex' : 'none';

    // Scroll to top
    window.scrollTo({top: 0, behavior: 'smooth'});

    // If going to step 3 (loading), start analysis after a short delay
    if (step === 3) {
        setTimeout(() => {
            simulateAnalysis();
        }, 500);
    }
}

function startAnalysis() {
    goToStep(3);
}

function simulateAnalysis() {
    // Simulate analysis delay
    setTimeout(() => {
        generateResults();
        goToStep(4);
    }, 3000);
}

function generateResults() {
    // Get selected role data
    const dept = roleData[state.department];
    const role = dept.roles.find(r => r.value === state.role);

    // Set role info
    elements.selectedDept.textContent = dept.name;
    elements.selectedRole.textContent = role.name;

    // Set analysis date
    const now = new Date();
    elements.analysisDate.textContent = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();

    // Generate random scores
    const scores = {
        keywords: Math.floor(Math.random() * 30) + 50, // 50-80
        formatting: Math.floor(Math.random() * 30) + 60, // 60-90
        content: Math.floor(Math.random() * 40) + 50, // 50-90
    };

    // Calculate overall score
    scores.overall = Math.floor((scores.keywords + scores.formatting + scores.content) / 3);

    // Set scores
    elements.overallScore.textContent = scores.overall;
    elements.keywordScore.textContent = scores.keywords + '/100';
    elements.formattingScore.textContent = scores.formatting + '/100';
    elements.contentScore.textContent = scores.content + '/100';

    // Set score colors
    elements.keywordScore.className = 'section-score ' + getScoreClass(scores.keywords);
    elements.formattingScore.className = 'section-score ' + getScoreClass(scores.formatting);
    elements.contentScore.className = 'section-score ' + getScoreClass(scores.content);

    // Set gauge widths
    elements.overallGauge.style.width = scores.overall + '%';
    elements.keywordGauge.style.width = scores.keywords + '%';
    elements.formattingGauge.style.width = scores.formatting + '%';
    elements.contentGauge.style.width = scores.content + '%';

    // Set meta data
    elements.keywordMatch.textContent = scores.keywords + '%';
    elements.wordCount.textContent = Math.floor(Math.random() * 300) + 300; // 300-600 words
    elements.roleRelevance.textContent = Math.floor(scores.overall * 0.9) + '%';

    // Set score description
    let description = '';
    if (scores.overall >= 85) {
        description = 'Excellent! Your resume is well-optimized for ATS systems and highly relevant to your target role.';
    } else if (scores.overall >= 70) {
        description = 'Good job! Your resume is generally well-optimized for ATS systems, with some room for improvement.';
    } else if (scores.overall >= 50) {
        description = 'Your resume needs some work to better align with ATS requirements. Focus on the improvement areas below.';
    } else {
        description = 'Your resume requires significant optimization for ATS compatibility. We recommend addressing the critical issues highlighted below.';
    }
    elements.scoreDescription.textContent = description;

    // Generate keyword analysis
    const keywords = role.keywords;
    const foundKeywords = [];
    const missingKeywords = [];

    // Randomly determine which keywords are found (weighted by score)
    keywords.forEach(keyword => {
        const found = Math.random() < (scores.keywords / 100);
        if (found) {
            foundKeywords.push(keyword);
        } else {
            missingKeywords.push(keyword);
        }
    });

    // Update keyword counts
    elements.keywordsFoundCount.textContent = foundKeywords.length;
    elements.keywordsTotalCount.textContent = keywords.length;

    // Display keywords
    elements.keywordsList.innerHTML = '';
    keywords.forEach(keyword => {
        const isFound = foundKeywords.includes(keyword);
        const span = document.createElement('span');
        span.className = 'keyword ' + (isFound ? 'keyword-found' : 'keyword-missing');
        span.textContent = keyword;
        elements.keywordsList.appendChild(span);
    });

    // Generate strengths and improvements
    generateStrengthsAndImprovements(scores, role);
}

function getScoreClass(score) {
    if (score >= 80) return 'score-high';
    if (score >= 60) return 'score-medium';
    return 'score-low';
}

function generateStrengthsAndImprovements(scores, role) {
    // Keyword strengths
    let strengths = [];
    if (scores.keywords >= 70) {
        strengths.push('Good use of role-specific terminology');
        strengths.push('Includes most important keywords for this position');
    } else if (scores.keywords >= 50) {
        strengths.push('Contains some relevant keywords');
        strengths.push('Basic technical vocabulary present');
    } else {
        strengths.push('Some relevant terms identified');
    }

    // Keyword improvements
    let improvements = [];
    if (scores.keywords < 80) {
        improvements.push('Add more ' + role.name + ' specific terms');
        improvements.push('Include variations of key terms (e.g., both "JavaScript" and "JS")');
    }
    if (scores.keywords < 60) {
        improvements.push('Review the job description for missing keywords');
        improvements.push('Add more technical skills from the ' + roleData[state.department].name + ' field');
    }

    // Update keyword section
    elements.keywordStrengths.innerHTML = strengths.map(s => `<li>${s}</li>`).join('');
    elements.keywordImprovements.innerHTML = improvements.map(i => `<li>${i}</li>`).join('');

    // Formatting strengths
    strengths = [];
    if (scores.formatting >= 80) {
        strengths.push('Clean, professional layout');
        strengths.push('Good use of standard section headings');
        strengths.push('No problematic formatting elements detected');
    } else if (scores.formatting >= 60) {
        strengths.push('Generally good structure');
        strengths.push('Most sections properly formatted');
    } else {
        strengths.push('Basic document structure present');
    }

    // Formatting improvements
    improvements = [];
    if (scores.formatting < 80) {
        improvements.push('Ensure consistent spacing throughout');
    }
    if (scores.formatting < 70) {
        improvements.push('Use more standard section headers (e.g., "Work Experience", "Skills")');
    }
    if (scores.formatting < 60) {
        improvements.push('Remove any tables or columns that might confuse ATS');
        improvements.push('Avoid graphics that might not be parsed correctly');
    }

    // Update formatting section
    elements.formattingStrengths.innerHTML = strengths.map(s => `<li>${s}</li>`).join('');
    elements.formattingImprovements.innerHTML = improvements.map(i => `<li>${i}</li>`).join('');

    // Content strengths
    strengths = [];
    if (scores.content >= 80) {
        strengths.push('Strong achievement statements with quantifiable results');
        strengths.push('Clear demonstration of relevant experience');
        strengths.push('Effective use of action verbs');
    } else if (scores.content >= 60) {
        strengths.push('Some good examples of achievements');
        strengths.push('Relevant experience highlighted');
    } else {
        strengths.push('Basic experience information present');
    }

    // Content improvements
    improvements = [];
    if (scores.content < 80) {
        improvements.push('Add more metrics to quantify achievements');
    }
    if (scores.content < 70) {
        improvements.push('Use stronger action verbs (e.g., "Led", "Developed", "Increased")');
    }
    if (scores.content < 60) {
        improvements.push('Focus more on accomplishments rather than responsibilities');
        improvements.push('Tailor content more specifically to ' + role.name + ' role');
    }

    // Update content section
    elements.contentStrengths.innerHTML = strengths.map(s => `<li>${s}</li>`).join('');
    elements.contentImprovements.innerHTML = improvements.map(i => `<li>${i}</li>`).join('');
}

function resetForm() {
    // Reset form elements
    elements.departmentSelect.selectedIndex = 0;
    elements.roleSelect.innerHTML = '<option value="" selected disabled>First select a department</option>';
    elements.roleSelect.disabled = true;
    elements.resumeFile.value = '';
    elements.fileInfo.style.display = 'none';
    elements.resumeText.value = '';

    // Reset state
    state.department = null;
    state.role = null;
    state.resumeFile = null;
    state.resumeText = '';
    state.analysisResults = null;

    // Reset buttons
    elements.roleNextBtn.disabled = true;
    elements.analyzeBtn.disabled = true;
}