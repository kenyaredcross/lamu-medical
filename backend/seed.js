require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./src/models/User');
const Internship = require('./src/models/Internship');
const Application = require('./src/models/Application');

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Internship.deleteMany({});
    await Application.deleteMany({});
    console.log('Cleared existing data');

    // Create test users
    const students = await User.create([
      {
        name: 'Alice Johnson',
        email: 'alice@example.com',
        password: 'password123',
        userType: 'student',
        profile: {
          bio: 'Passionate about web development and learning new technologies',
          location: 'San Francisco, CA',
          phone: '+1-234-567-8901',
        },
      },
      {
        name: 'Bob Smith',
        email: 'bob@example.com',
        password: 'password123',
        userType: 'student',
        profile: {
          bio: 'Full-stack developer interested in React and Node.js',
          location: 'New York, NY',
          phone: '+1-234-567-8902',
        },
      },
      {
        name: 'Carol Davis',
        email: 'carol@example.com',
        password: 'password123',
        userType: 'student',
        profile: {
          bio: 'UI/UX designer with a passion for user experience',
          location: 'Los Angeles, CA',
          phone: '+1-234-567-8903',
        },
      },
    ]);

    const companies = await User.create([
      {
        name: 'Tech Startup Inc',
        email: 'hr@techstartup.com',
        password: 'password123',
        userType: 'company',
        profile: {
          bio: 'Innovative tech startup focused on AI and machine learning',
          location: 'San Francisco, CA',
          phone: '+1-800-123-4567',
        },
      },
      {
        name: 'Digital Solutions Ltd',
        email: 'careers@digitalsolutions.com',
        password: 'password123',
        userType: 'company',
        profile: {
          bio: 'Leading digital transformation agency',
          location: 'New York, NY',
          phone: '+1-800-234-5678',
        },
      },
      {
        name: 'Creative Agency Pro',
        email: 'jobs@creativeagency.com',
        password: 'password123',
        userType: 'company',
        profile: {
          bio: 'Full-service creative agency specializing in branding',
          location: 'Los Angeles, CA',
          phone: '+1-800-345-6789',
        },
      },
    ]);

    console.log('Created test users');

    // Create test internships
    const internships = await Internship.create([
      {
        title: 'Frontend Developer Internship',
        company: companies[0]._id,
        description: 'Join our talented frontend team and build amazing user experiences with React and TypeScript. You will work on real projects, collaborate with designers, and learn modern web development practices.',
        location: 'San Francisco, CA',
        duration: '3 months',
        stipend: 2000,
        skills: ['React', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
        requirements: ['Knowledge of HTML/CSS', 'Familiarity with JavaScript', 'Basic understanding of React'],
        category: 'Frontend Development',
      },
      {
        title: 'Backend Developer Internship',
        company: companies[0]._id,
        description: 'Work with our backend team to build scalable APIs and services. You will learn Node.js, Express, MongoDB, and system design principles while contributing to production code.',
        location: 'San Francisco, CA',
        duration: '3 months',
        stipend: 2200,
        skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
        requirements: ['JavaScript proficiency', 'Understanding of databases', 'Problem-solving skills'],
        category: 'Backend Development',
      },
      {
        title: 'Full Stack Developer Internship',
        company: companies[1]._id,
        description: 'Build end-to-end solutions in a full-stack development role. Gain hands-on experience with modern tech stack and agile development methodologies.',
        location: 'New York, NY',
        duration: '4 months',
        stipend: 2500,
        skills: ['React', 'Node.js', 'MongoDB', 'Docker'],
        requirements: ['Full-stack development knowledge', 'Version control (Git)', 'Communication skills'],
        category: 'Full Stack Development',
      },
      {
        title: 'UI/UX Design Internship',
        company: companies[2]._id,
        description: 'Design beautiful and functional user interfaces for our web and mobile applications. Work with design tools like Figma and collaborate with developers to bring designs to life.',
        location: 'Los Angeles, CA',
        duration: '3 months',
        stipend: 1800,
        skills: ['Figma', 'UI Design', 'UX Research', 'Prototyping'],
        requirements: ['Design fundamentals', 'Portfolio with design work', 'Attention to detail'],
        category: 'Design',
      },
      {
        title: 'Data Science Internship',
        company: companies[0]._id,
        description: 'Work with our data science team on machine learning projects and data analysis. You will work with Python, pandas, and TensorFlow on real-world datasets.',
        location: 'San Francisco, CA',
        duration: '4 months',
        stipend: 2300,
        skills: ['Python', 'Machine Learning', 'Data Analysis', 'TensorFlow'],
        requirements: ['Python programming', 'Statistics knowledge', 'Linear algebra basics'],
        category: 'Data Science',
      },
      {
        title: 'Mobile App Developer Internship',
        company: companies[1]._id,
        description: 'Develop iOS and Android applications using React Native. Learn mobile app development best practices and work on apps used by thousands of users.',
        location: 'New York, NY',
        duration: '3 months',
        stipend: 2100,
        skills: ['React Native', 'JavaScript', 'Mobile Development', 'Git'],
        requirements: ['JavaScript knowledge', 'Mobile development interest', 'Problem-solving abilities'],
        category: 'Mobile Development',
      },
    ]);

    console.log('Created test internships');

    // Create test applications
    await Application.create([
      {
        student: students[0]._id,
        internship: internships[0]._id,
        status: 'pending',
        coverLetter: 'I am very interested in this Frontend Developer position as it aligns perfectly with my career goals.',
      },
      {
        student: students[0]._id,
        internship: internships[2]._id,
        status: 'accepted',
        coverLetter: 'Full stack development is my passion and I am excited about this opportunity.',
      },
      {
        student: students[1]._id,
        internship: internships[1]._id,
        status: 'pending',
        coverLetter: 'As a backend developer, I would love to contribute to your team and learn from experienced engineers.',
      },
      {
        student: students[2]._id,
        internship: internships[3]._id,
        status: 'pending',
        coverLetter: 'My design experience and passion for UX make me a great fit for this role.',
      },
      {
        student: students[1]._id,
        internship: internships[5]._id,
        status: 'rejected',
        coverLetter: 'I am interested in mobile app development and would like to apply for this position.',
      },
    ]);

    console.log('Created test applications');

    // Update applications count in internships
    for (const internship of internships) {
      const count = await Application.countDocuments({ internship: internship._id });
      await Internship.findByIdAndUpdate(internship._id, { applications: count });
    }

    console.log('Updated applications count');

    console.log('✅ Database seeding completed successfully!');
    console.log('Test users created:');
    console.log('Students:', students.map(s => `${s.name} (${s.email})`));
    console.log('Companies:', companies.map(c => `${c.name} (${c.email})`));
    console.log(`\nCreated ${internships.length} internships and ${await Application.countDocuments()} applications`);

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
