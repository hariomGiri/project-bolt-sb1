import React from 'react';
import { Code2, Link as LinkIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Projects = () => {
  const { theme, currentTheme } = useTheme();
  
  const projects = [
    {
      title: 'Linear Regression - Insurance Prediction',
      description: 'Developed a model to predict insurance rates based on demographic factors. Visualized trends using Matplotlib and Seaborn for actionable insights.',
      tech: ['Python', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
      code: `# Sample code snippet
from sklearn.linear_model import LinearRegression
model = LinearRegression()
model.fit(X_train, y_train)`,
    },
    {
      title: 'KNN-based Diabetes Prediction',
      description: 'Built a K-Nearest Neighbors (KNN) model to predict diabetes using patient data. Optimized hyperparameters and implemented feature scaling.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      code: `from sklearn.neighbors import KNeighborsClassifier
knn = KNeighborsClassifier(n_neighbors=5)
knn.fit(X_train, y_train)`,
    },
    {
      title: 'Titanic Survival Prediction',
      description: 'Created a classification model to predict passenger survival using the Titanic dataset. Applied feature engineering and cross-validation.',
      tech: ['Python', 'Machine Learning', 'Pandas'],
      code: `# Feature engineering example
df['FamilySize'] = df['SibSp'] + df['Parch'] + 1
model.fit(X_train, y_train)`,
    },
    {
      title: 'Brain Stroke Prediction',
      description: 'Designed a predictive model using supervised learning techniques to estimate brain stroke likelihood. Utilized Scikit-learn for preprocessing.',
      tech: ['Python', 'Machine Learning', 'Scikit-learn'],
      code: `from sklearn.preprocessing import StandardScaler
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)`,
    },
    {
      title: 'Pragya kalp - Voice Assistant',
      description: 'Built an intelligent personal assistant integrating speech recognition and AI-generated responses. Automated tasks like web searches, video playback, and file management using PyQt5 and related libraries.',
      tech: ['Python', 'PyQt5', 'Speech Recognition', 'AI'],
      code: `import speech_recognition as sr
r = sr.Recognizer()
with sr.Microphone() as source:
    audio = r.listen(source)`,
      githubLink: 'https://github.com/hariomGiri/Pragya-Kalp/blob/main/README.md'
    },
    {
      title: 'Scientific Calculator',
      description: 'Developed a GUI-based scientific calculator using Python and Tkinter. Implemented advanced mathematical operations with user-friendly interface.',
      tech: ['Python', 'Tkinter', 'Math'],
      code: `import tkinter as tk
window = tk.Tk()
window.title("Scientific Calculator")`,
    },
    {
      title: 'Dynamic Landing Page',
      description: 'Developed a responsive landing page using modern web technologies as part of a web development internship.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      code: `const nav = document.querySelector('.nav');
window.addEventListener('scroll', fixNav);`,
    },
    {
      title: 'To-Do List Application',
      description: 'Created an interactive to-do list application with task management features and local storage integration.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      code: `localStorage.setItem('todos', 
JSON.stringify(todos));
renderTodoList();`,
    },
  ];

  return (
    <section 
      id="projects" 
      className="py-20 px-4"
      style={{ backgroundColor: theme.background }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">PROJECTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              style={{ 
                backgroundColor: theme.cardBg,
                boxShadow: currentTheme === 'gradient' 
                  ? `0 4px 20px ${theme.primary}20`
                  : '0 4px 20px rgba(0, 0, 0, 0.1)'
              }}
              className="rounded-lg overflow-hidden hover:scale-105 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold" style={{ color: theme.primary }}>
                    {project.title}
                  </h3>
                  <Code2 style={{ color: theme.primary }} />
                </div>
                <p style={{ color: theme.muted }} className="mb-4">
                  {project.description}
                </p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      style={{ 
                        backgroundColor: `${theme.primary}15`,
                        color: theme.primary,
                        borderColor: `${theme.primary}30`
                      }}
                      className="px-3 py-1 rounded-full text-sm border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* GitHub Link */}
                {project.githubLink && (
                  <div className="mt-4">
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm"
                      style={{ color: theme.primary }}
                    >
                      <LinkIcon className="w-4 h-4" />
                      View Project Details
                    </a>
                  </div>
                )}
              </div>
              <div style={{ backgroundColor: `${theme.cardBg}dd` }} className="p-4">
                <pre className="text-sm font-mono" style={{ color: theme.text }}>
                  <code>{project.code}</code>
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;