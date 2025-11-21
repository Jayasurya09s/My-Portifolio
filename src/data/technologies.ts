export interface Technology {
  name: string;
  icon: string;
  category: string;
  color: string;
  mastery: number;
}

export const technologies: Technology[] = [
  // Frontend
  { name: 'HTML5', icon: '🌐', category: 'Frontend', color: '#e34c26', mastery: 90 },
  { name: 'CSS3', icon: '🎨', category: 'Frontend', color: '#264de4', mastery: 88 },
  { name: 'JavaScript', icon: '⚡', category: 'Frontend', color: '#f7df1e', mastery: 92 },
  { name: 'TypeScript', icon: '📘', category: 'Frontend', color: '#3178c6', mastery: 85 },
  { name: 'React', icon: '⚛️', category: 'Frontend', color: '#61dafb', mastery: 95 },
  // { name: 'Next.js', icon: '▲', category: 'Frontend', color: '#000000', mastery: 82 },
  // { name: 'Vue.js', icon: '💚', category: 'Frontend', color: '#42b883', mastery: 75 },
  // { name: 'Angular', icon: '🅰️', category: 'Frontend', color: '#dd0031', mastery: 70 },
  { name: 'TailwindCSS', icon: '💨', category: 'Frontend', color: '#06b6d4', mastery: 90 },
  { name: 'Bootstrap', icon: '🥾', category: 'Frontend', color: '#7952b3', mastery: 85 },
  // { name: 'Redux', icon: '🔄', category: 'Frontend', color: '#764abc', mastery: 80 },
  { name: 'Framer Motion', icon: '🎬', category: 'Frontend', color: '#ff0055', mastery: 88 },
  { name: 'Three.js', icon: '🎲', category: 'Frontend', color: '#000000', mastery: 78 },
  // { name: 'SASS/SCSS', icon: '💅', category: 'Frontend', color: '#cc6699', mastery: 82 },
  { name: 'Vite', icon: '⚡', category: 'Frontend', color: '#646cff', mastery: 85 },

  // Backend
  { name: 'Node.js', icon: '🟢', category: 'Backend', color: '#339933', mastery: 90 },
  { name: 'Express.js', icon: '🚂', category: 'Backend', color: '#000000', mastery: 88 },
  { name: 'Python', icon: '🐍', category: 'Backend', color: '#3776ab', mastery: 92 },
  // { name: 'Django', icon: '🎸', category: 'Backend', color: '#092e20', mastery: 85 },
  { name: 'FastAPI', icon: '⚡', category: 'Backend', color: '#009688', mastery: 82 },
  // { name: 'Flask', icon: '🧪', category: 'Backend', color: '#000000', mastery: 80 },
  { name: 'REST APIs', icon: '🔌', category: 'Backend', color: '#61dafb', mastery: 90 },
  // { name: 'GraphQL', icon: '📊', category: 'Backend', color: '#e10098', mastery: 75 },
  { name: 'WebSockets', icon: '🔗', category: 'Backend', color: '#010101', mastery: 78 },
  // { name: 'Java', icon: '☕', category: 'Backend', color: '#007396', mastery: 80 },
  // { name: 'Spring Boot', icon: '🍃', category: 'Backend', color: '#6db33f', mastery: 75 },
  // { name: 'Go', icon: '🐹', category: 'Backend', color: '#00add8', mastery: 70 },

  // AI/ML
  { name: 'TensorFlow', icon: '🧠', category: 'AI/ML', color: '#ff6f00', mastery: 82 },
  { name: 'PyTorch', icon: '🔥', category: 'AI/ML', color: '#ee4c2c', mastery: 80 },
  { name: 'Scikit-learn', icon: '📊', category: 'AI/ML', color: '#f7931e', mastery: 85 },
  { name: 'Pandas', icon: '🐼', category: 'AI/ML', color: '#150458', mastery: 88 },
  { name: 'NumPy', icon: '🔢', category: 'AI/ML', color: '#013243', mastery: 87 },
  { name: 'OpenCV', icon: '👁️', category: 'AI/ML', color: '#5c3ee8', mastery: 78 },
  // { name: 'Keras', icon: '🎯', category: 'AI/ML', color: '#d00000', mastery: 80 },
  { name: 'OpenAI API', icon: '🤖', category: 'AI/ML', color: '#412991', mastery: 85 },
  // { name: 'LangChain', icon: '🦜', category: 'AI/ML', color: '#1c3c3c', mastery: 82 },
  { name: 'Hugging Face', icon: '🤗', category: 'AI/ML', color: '#ff9d00', mastery: 75 },

  // Blockchain
  { name: 'Ethereum', icon: '💎', category: 'Blockchain', color: '#3c3c3d', mastery: 85 },
  { name: 'Solidity', icon: '⚙️', category: 'Blockchain', color: '#363636', mastery: 88 },
  { name: 'Web3.js', icon: '🌐', category: 'Blockchain', color: '#f16822', mastery: 82 },
  { name: 'Smart Contracts', icon: '📜', category: 'Blockchain', color: '#627eea', mastery: 85 },
  { name: 'MetaMask', icon: '🦊', category: 'Blockchain', color: '#f6851b', mastery: 80 },
  { name: 'Hardhat', icon: '⛏️', category: 'Blockchain', color: '#fff100', mastery: 78 },
  { name: 'IPFS', icon: '📦', category: 'Blockchain', color: '#65c2cb', mastery: 75 },
  // { name: 'Truffle', icon: '🍫', category: 'Blockchain', color: '#5e464d', mastery: 72 },

  // // Cloud & DevOps
  // { name: 'AWS', icon: '☁️', category: 'Cloud & DevOps', color: '#ff9900', mastery: 85 },
  // { name: 'Azure', icon: '🔷', category: 'Cloud & DevOps', color: '#0089d6', mastery: 78 },
  // { name: 'Google Cloud', icon: '🌩️', category: 'Cloud & DevOps', color: '#4285f4', mastery: 80 },
  // { name: 'Docker', icon: '🐳', category: 'Cloud & DevOps', color: '#2496ed', mastery: 88 },
  // { name: 'Kubernetes', icon: '☸️', category: 'Cloud & DevOps', color: '#326ce5', mastery: 75 },
  // { name: 'Jenkins', icon: '🔨', category: 'Cloud & DevOps', color: '#d24939', mastery: 72 },
  // { name: 'GitHub Actions', icon: '🚀', category: 'Cloud & DevOps', color: '#2088ff', mastery: 85 },
  // { name: 'CI/CD', icon: '♾️', category: 'Cloud & DevOps', color: '#239120', mastery: 82 },
  // { name: 'Nginx', icon: '🌐', category: 'Cloud & DevOps', color: '#009639', mastery: 80 },
  // { name: 'Git', icon: '📚', category: 'Cloud & DevOps', color: '#f05032', mastery: 92 },
  // { name: 'Terraform', icon: '🏗️', category: 'Cloud & DevOps', color: '#7b42bc', mastery: 70 },
  // { name: 'Shell Scripting', icon: '🐚', category: 'Cloud & DevOps', color: '#4eaa25', mastery: 85 },
  // { name: 'Lambda', icon: 'λ', category: 'Cloud & DevOps', color: '#ff9900', mastery: 78 },

  // IoT & Robotics
  { name: 'Arduino', icon: '🤖', category: 'IoT & Robotics', color: '#00979d', mastery: 88 },
  { name: 'ESP32', icon: '📡', category: 'IoT & Robotics', color: '#e7352c', mastery: 85 },
  // { name: 'NodeMCU', icon: '📟', category: 'IoT & Robotics', color: '#00979d', mastery: 82 },
  { name: 'Raspberry Pi', icon: '🥧', category: 'IoT & Robotics', color: '#c51a4a', mastery: 80 },
  { name: 'MQTT', icon: '📨', category: 'IoT & Robotics', color: '#660066', mastery: 78 },
  { name: 'Sensors', icon: '🔬', category: 'IoT & Robotics', color: '#0066cc', mastery: 85 },
  // { name: 'ROS', icon: '🦾', category: 'IoT & Robotics', color: '#22314e', mastery: 70 },

  // // Cybersecurity
  // { name: 'Penetration Testing', icon: '🔐', category: 'Cybersecurity', color: '#ff0000', mastery: 75 },
  // { name: 'Network Security', icon: '🛡️', category: 'Cybersecurity', color: '#0078d4', mastery: 78 },
  // { name: 'Cryptography', icon: '🔒', category: 'Cybersecurity', color: '#4b0082', mastery: 80 },
  // { name: 'Ethical Hacking', icon: '🎯', category: 'Cybersecurity', color: '#00ff00', mastery: 72 },
  // { name: 'Wireshark', icon: '🦈', category: 'Cybersecurity', color: '#1679a7', mastery: 75 },
  // { name: 'Metasploit', icon: '💣', category: 'Cybersecurity', color: '#2e2e2e', mastery: 70 },

  // Databases
  { name: 'MongoDB', icon: '🍃', category: 'Databases', color: '#47a248', mastery: 88 },
  { name: 'PostgreSQL', icon: '🐘', category: 'Databases', color: '#336791', mastery: 85 },
  { name: 'MySQL', icon: '🐬', category: 'Databases', color: '#4479a1', mastery: 82 },
  // { name: 'Redis', icon: '📮', category: 'Databases', color: '#dc382d', mastery: 80 },
  { name: 'Firebase', icon: '🔥', category: 'Databases', color: '#ffca28', mastery: 85 },
  // { name: 'Supabase', icon: '⚡', category: 'Databases', color: '#3ecf8e', mastery: 82 },
  // { name: 'SQLite', icon: '📀', category: 'Databases', color: '#003b57', mastery: 78 },
  // { name: 'DynamoDB', icon: '🗄️', category: 'Databases', color: '#4053d6', mastery: 75 },

  // Tools & IDEs
  { name: 'VS Code', icon: '💻', category: 'Tools & IDEs', color: '#007acc', mastery: 95 },
  // { name: 'IntelliJ IDEA', icon: '🧠', category: 'Tools & IDEs', color: '#000000', mastery: 80 },
  { name: 'PyCharm', icon: '🐍', category: 'Tools & IDEs', color: '#21d789', mastery: 85 },
  { name: 'Postman', icon: '📬', category: 'Tools & IDEs', color: '#ff6c37', mastery: 90 },
  { name: 'Figma', icon: '🎨', category: 'Tools & IDEs', color: '#f24e1e', mastery: 82 },
  // { name: 'Jira', icon: '📋', category: 'Tools & IDEs', color: '#0052cc', mastery: 75 },
  // { name: 'Slack', icon: '💬', category: 'Tools & IDEs', color: '#4a154b', mastery: 88 },
  { name: 'Notion', icon: '📝', category: 'Tools & IDEs', color: '#000000', mastery: 85 },
];

export const categories = [
  'All',
  'Frontend',
  'Backend',
  'AI/ML',
  'Blockchain',
  'Cloud & DevOps',
  'IoT & Robotics',
  'Cybersecurity',
  'Databases',
  'Tools & IDEs'
];
