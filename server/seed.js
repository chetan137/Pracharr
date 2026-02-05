require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');
const Content = require('./models/Content');
const Service = require('./models/Service');
const Testimonial = require('./models/Testimonial');
const Founder = require('./models/Founder');

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Content.deleteMany({});
    await Service.deleteMany({});
    await Testimonial.deleteMany({});
    await Founder.deleteMany({});

    // Create admin user
    await User.create({
      name: 'Admin',
      email: process.env.ADMIN_EMAIL || 'admin@pracharr.com',
      password: process.env.ADMIN_PASSWORD || 'Admin@123',
      role: 'admin'
    });
    console.log('✓ Admin user created');

    // Create homepage content
    await Content.create([
      {
        section: 'hero',
        title: 'We Don\'t Do Marketing.',
        subtitle: 'We Craft Legacies.',
        content: 'At Pracharr, we believe brands are not built through ads — they are built through stories that refuse to be forgotten.',
        tagline: 'प्र-4',
        ctaText: 'Start Your Story',
        ctaLink: '#contact'
      },
      {
        section: 'philosophy',
        title: 'Our Philosophy',
        subtitle: 'Creativity That Commands Attention',
        content: 'In a world drowning in content, we create moments that make people pause. We don\'t chase trends — we set them. Every campaign we craft is a statement, every brand we build is a movement.',
        tagline: 'Think Different. Be Remembered.'
      },
      {
        section: 'about',
        title: 'Why Pracharr?',
        subtitle: 'Because Ordinary Is Obsolete',
        content: 'We are not just another agency. We are storytellers, mavericks, and dreamers who transform businesses into unforgettable brands. Our obsession is simple: Make you impossible to ignore.'
      }
    ]);
    console.log('✓ Content created');

    // Create services
    await Service.create([
      {
        title: 'Brand Strategy & Identity',
        shortDescription: 'Crafting distinctive brand identities that resonate and endure.',
        fullDescription: 'We dive deep into your vision to create brand strategies that don\'t just stand out — they stand for something.',
        icon: '🎯',
        features: ['Brand Positioning', 'Visual Identity', 'Brand Guidelines', 'Messaging Framework'],
        order: 1
      },
      {
        title: 'Creative Campaigns',
        shortDescription: 'Campaigns that spark conversations and drive action.',
        fullDescription: 'From concept to execution, we create campaigns that capture hearts and convert minds.',
        icon: '🚀',
        features: ['Campaign Strategy', 'Creative Direction', 'Content Production', 'Multi-Platform Execution'],
        order: 2
      },
      {
        title: 'Digital Presence',
        shortDescription: 'Building commanding digital footprints across platforms.',
        fullDescription: 'We architect digital experiences that engage, convert, and leave lasting impressions.',
        icon: '💫',
        features: ['Website Design', 'Social Media Strategy', 'SEO & Content', 'Performance Marketing'],
        order: 3
      },
      {
        title: 'Storytelling & Content',
        shortDescription: 'Stories that stick, content that converts.',
        fullDescription: 'We craft narratives that transform brands into movements and customers into advocates.',
        icon: '✨',
        features: ['Brand Storytelling', 'Video Production', 'Copywriting', 'Content Strategy'],
        order: 4
      }
    ]);
    console.log('✓ Services created');

    // Create testimonials
    await Testimonial.create([
      {
        name: 'Arjun Mehta',
        designation: 'Founder & CEO',
        company: 'TechVentures India',
        content: 'Pracharr didn\'t just rebrand us — they redefined how we see ourselves. Our brand now commands the respect it deserves.',
        rating: 5,
        isFeatured: true,
        order: 1
      },
      {
        name: 'Priya Sharma',
        designation: 'Marketing Director',
        company: 'Luxe Lifestyle',
        content: 'Working with Pracharr was transformative. They understood our vision before we could articulate it ourselves.',
        rating: 5,
        isFeatured: true,
        order: 2
      },
      {
        name: 'Vikram Desai',
        designation: 'Co-Founder',
        company: 'GreenEarth Solutions',
        content: 'The campaign Pracharr created for us wasn\'t just successful — it became a cultural moment. That\'s the Pracharr difference.',
        rating: 5,
        isFeatured: true,
        order: 3
      }
    ]);
    console.log('✓ Testimonials created');

    // Create founders
    await Founder.create([
      {
        name: 'Rahul Verma',
        role: 'Founder & Creative Director',
        shortBio: 'A storyteller at heart, Rahul has spent 15 years turning brands into cultural phenomena.',
        bio: 'With a background in advertising and a passion for bold creativity, Rahul founded Pracharr to challenge the mundane and create brands that dare to be different.',
        order: 1
      },
      {
        name: 'Ananya Kapoor',
        role: 'Co-Founder & Strategy Head',
        shortBio: 'Ananya brings strategic brilliance that transforms creative ideas into business results.',
        bio: 'An MBA from IIM with experience at global agencies, Ananya ensures every creative leap is grounded in solid strategy.',
        order: 2
      }
    ]);
    console.log('✓ Founders created');

    console.log('\n🎉 Database seeded successfully!');
    console.log('Admin credentials:');
    console.log(`Email: ${process.env.ADMIN_EMAIL || 'admin@pracharr.com'}`);
    console.log(`Password: ${process.env.ADMIN_PASSWORD || 'Admin@123'}`);

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedData();
