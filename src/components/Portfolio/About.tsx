import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import {
  Code as CodeIcon,
  Brush as DesignIcon,
  Speed as SpeedIcon,
  Psychology as PsychologyIcon,
  Cloud as CloudIcon,
  DataObject as ReactIcon,
  CodeOff as PythonIcon
} from '@mui/icons-material';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const About: React.FC = () => {
  const storyAnimation = useScrollAnimation();
  const languagesAnimation = useScrollAnimation();
  const frameworksAnimation = useScrollAnimation();
  const cloudDevOpsAnimation = useScrollAnimation();
  const databasesAnimation = useScrollAnimation();
  const editingSkillsAnimation = useScrollAnimation();
  const softSkillsAnimation = useScrollAnimation();
  const experienceAnimation = useScrollAnimation();

  const languages = [
    { name: 'C', icon: <Typography sx={{ fontSize: 48, fontWeight: 'bold', color: '#A8B9CC', fontFamily: 'monospace' }}>C</Typography> },
    { name: 'Java', icon: <Typography sx={{ fontSize: 48, fontWeight: 'bold', color: '#007396', fontFamily: 'monospace' }}>J</Typography> },
    { name: 'Python', icon: <img src="/python.svg" alt="Python" style={{ width: 48, height: 48 }} /> },
    { name: 'JavaScript', icon: <img src="/javascript.svg" alt="JavaScript" style={{ width: 48, height: 48 }} /> },
    { name: 'TypeScript', icon: <img src="/typescript.svg" alt="TypeScript" style={{ width: 48, height: 48 }} /> },
  ];

  const frameworks = [
    { name: 'React', icon: <img src="/react.svg" alt="React" style={{ width: 48, height: 48 }} /> },
    { name: 'Vite', icon: <img src="/vite.svg" alt="Vite" style={{ width: 48, height: 48 }} /> },
    { name: 'Tailwind CSS', icon: <Typography sx={{ fontSize: 40, fontWeight: 'bold', color: '#06B6D4', fontFamily: 'monospace' }}>TW</Typography> },
    { name: 'Spring Boot', icon: <img src="/springboot.svg" alt="Spring Boot" style={{ width: 48, height: 48 }} /> },
    { name: 'Node.js', icon: <Typography sx={{ fontSize: 48, fontWeight: 'bold', color: '#339933', fontFamily: 'monospace' }}>N</Typography> },
    { name: 'Express', icon: <Typography sx={{ fontSize: 40, fontWeight: 'bold', color: '#000000', fontFamily: 'monospace' }}>Ex</Typography> },
  ];

  const cloudDevOps = [
    { name: 'Docker', icon: <img src="/docker.svg" alt="Docker" style={{ width: 48, height: 48 }} /> },
    { name: 'Kubernetes', icon: <Typography sx={{ fontSize: 40, fontWeight: 'bold', color: '#326CE5', fontFamily: 'monospace' }}>K8s</Typography> },
    { name: 'Jenkins', icon: <Typography sx={{ fontSize: 48, fontWeight: 'bold', color: '#D24939', fontFamily: 'monospace' }}>J</Typography> },
    { name: 'AWS', icon: <img src="/aws.svg" alt="AWS" style={{ width: 48, height: 48 }} /> },
    { name: 'CI/CD', icon: <Typography sx={{ fontSize: 32, fontWeight: 'bold', color: '#1976d2', fontFamily: 'monospace' }}>CI/CD</Typography> },
  ];

  const databases = [
    { name: 'MongoDB', icon: <img src="/mongodb.svg" alt="MongoDB" style={{ width: 48, height: 48 }} /> },
    { name: 'MySQL', icon: <img src="/mysql.svg" alt="MySQL" style={{ width: 48, height: 48 }} /> },
  ];

  const editingSkills = [
    { name: 'Adobe Photoshop', icon: <img src="/photoshop.svg" alt="Photoshop" style={{ width: 48, height: 48 }} /> },
    { name: 'Adobe Premiere Pro', icon: <img src="/premiere-pro.svg" alt="Premiere Pro" style={{ width: 48, height: 48 }} /> },
    { name: 'DaVinci Resolve', icon: <img src="/davinci.svg" alt="DaVinci Resolve" style={{ width: 48, height: 48 }} /> },
    { name: 'Canva', icon: <img src="/canva.svg" alt="Canva" style={{ width: 48, height: 48 }} /> },
  ];

  const softSkills = [
    { name: 'Leadership', icon: <Typography sx={{ fontSize: 42 }}>👥</Typography> },
    { name: 'Problem-Solving', icon: <Typography sx={{ fontSize: 42 }}>🧩</Typography> },
    { name: 'Time Management', icon: <Typography sx={{ fontSize: 42 }}>⏱️</Typography> },
    { name: 'Communication', icon: <Typography sx={{ fontSize: 42 }}>💬</Typography> },
  ];

  const renderSkillBox = (item: { name: string; icon: JSX.Element }) => (
    <Box
      key={item.name}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: { xs: '8px 12px', sm: '10px 16px' },
        bgcolor: '#f5f5f5',
        borderRadius: '8px',
        border: '1px solid #e0e0e0',
        whiteSpace: 'nowrap'
      }}
    >
      <Typography variant="body2" sx={{ fontWeight: 500, color: '#0d47a1', whiteSpace: 'nowrap' }}>
        {item.name}
      </Typography>
    </Box>
  );



  return (
    <Box id="about" sx={{ py: 8, bgcolor: 'white' }}>
      <Container maxWidth="lg">
        {/* My Story */}
        <Box 
          ref={storyAnimation.ref}
          className={storyAnimation.isVisible ? 'scroll-animate' : ''}
          sx={{ textAlign: 'center', mb: 8 }}
        >
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 3, color: '#1976d2' }}>
            My Story
          </Typography>
          <Box sx={{ maxWidth: '1000px', mx: 'auto', textAlign: 'center' }}>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: '#555', fontSize: '1.05rem' }}>
              I'm a developer with the eye of a designer. My journey into the tech world wasn't a straight line—it was a creative path that started with a passion for graphic design. At KL University, I immersed myself in the world of visuals, taking on leadership roles as the Designing Head and later the Co-Lead for the VYUHA club (KL SAC), and also serving as the Director of Designing for the VIDHURA club (AIDS). These experiences taught me how to lead creative projects and master tools for photo editing and design.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, color: '#555', fontSize: '1.05rem' }}>
              This ambition to build experiences from the ground up led me to full-stack development, where I developed a strong foundation in backend and frontend technologies. Over time, I have specialized in creating powerful web applications with Spring Boot, React, and MySQL. Currently, I am pursuing a specialization in Cloud Native Software Engineering, further enhancing my ability to design scalable, resilient, and modern applications. My unique background allows me to not only write clean, maintainable code but also ensure the final product is intuitive, visually appealing, and provides an exceptional user experience.
            </Typography>
          </Box>
        </Box>

        {/* Skills Section */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {/* Row 1: Languages, Frameworks, Cloud & DevOps */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center', alignItems: 'flex-start' }}>
            {/* Languages */}
            <Box
              ref={languagesAnimation.ref}
              className={languagesAnimation.isVisible ? 'scroll-animate' : ''}
              sx={{ flex: { xs: '1 1 100%', md: '1 1 30%' }, minWidth: { xs: '100%', md: '250px' }, pt: { xs: 2, md: 0 }, pb: { xs: 4, md: 0 }, borderBottom: { xs: '1px solid #e0e0e0', md: 'none' } }}
            >
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, color: '#1976d2', textAlign: 'center', fontSize: { xs: '1.5rem', md: '2rem' }, minHeight: { md: '80px' }, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                Tech Stack
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
                {languages.map(renderSkillBox)}
              </Box>
            </Box>

            {/* Frameworks */}
            <Box
              ref={frameworksAnimation.ref}
              className={frameworksAnimation.isVisible ? 'scroll-animate' : ''}
              sx={{ flex: { xs: '1 1 100%', md: '1 1 30%' }, minWidth: { xs: '100%', md: '250px' }, pt: { xs: 0, md: 0 }, pb: { xs: 4, md: 0 }, borderBottom: { xs: '1px solid #e0e0e0', md: 'none' } }}
            >
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, color: '#1976d2', textAlign: 'center', fontSize: { xs: '1.5rem', md: '2rem' }, minHeight: { md: '80px' }, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                Frameworks & Libraries
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
                {frameworks.map(renderSkillBox)}
              </Box>
            </Box>

            {/* Cloud & DevOps */}
            <Box
              ref={cloudDevOpsAnimation.ref}
              className={cloudDevOpsAnimation.isVisible ? 'scroll-animate' : ''}
              sx={{ flex: { xs: '1 1 100%', md: '1 1 30%' }, minWidth: { xs: '100%', md: '250px' }, pt: { xs: 0, md: 0 }, pb: { xs: 4, md: 0 }, borderBottom: { xs: '1px solid #e0e0e0', md: 'none' } }}
            >
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, color: '#1976d2', textAlign: 'center', fontSize: { xs: '1.5rem', md: '2rem' }, minHeight: { md: '80px' }, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                Cloud & DevOps
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
                {cloudDevOps.map(renderSkillBox)}
              </Box>
            </Box>
          </Box>

          {/* Row 2: Databases, Creative Tools, Soft Skills */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center', alignItems: 'flex-start' }}>
            {/* Databases */}
            <Box
              ref={databasesAnimation.ref}
              className={databasesAnimation.isVisible ? 'scroll-animate' : ''}
              sx={{ flex: { xs: '1 1 100%', md: '1 1 30%' }, minWidth: { xs: '100%', md: '250px' }, pt: { xs: 0, md: 0 }, pb: { xs: 4, md: 0 }, borderBottom: { xs: '1px solid #e0e0e0', md: 'none' } }}
            >
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, color: '#1976d2', textAlign: 'center', fontSize: { xs: '1.5rem', md: '2rem' }, minHeight: { md: '80px' }, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                Databases
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
                {databases.map(renderSkillBox)}
              </Box>
            </Box>

            {/* Editing Skills */}
            <Box
              ref={editingSkillsAnimation.ref}
              className={editingSkillsAnimation.isVisible ? 'scroll-animate' : ''}
              sx={{ flex: { xs: '1 1 100%', md: '1 1 30%' }, minWidth: { xs: '100%', md: '250px' }, pt: { xs: 0, md: 0 }, pb: { xs: 4, md: 0 }, borderBottom: { xs: '1px solid #e0e0e0', md: 'none' } }}
            >
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, color: '#1976d2', textAlign: 'center', fontSize: { xs: '1.5rem', md: '2rem' }, minHeight: { md: '80px' }, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                Creative Tools
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
                {editingSkills.map(renderSkillBox)}
              </Box>
            </Box>

            {/* Soft Skills */}
            <Box
              ref={softSkillsAnimation.ref}
              className={softSkillsAnimation.isVisible ? 'scroll-animate' : ''}
              sx={{ flex: { xs: '1 1 100%', md: '1 1 30%' }, minWidth: { xs: '100%', md: '250px' }, pt: { xs: 0, md: 0 }, pb: { xs: 4, md: 0 } }}
            >
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, color: '#1976d2', textAlign: 'center', fontSize: { xs: '1.5rem', md: '2rem' }, minHeight: { md: '80px' }, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                Soft Skills
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
                {softSkills.map(renderSkillBox)}
              </Box>
            </Box>
          </Box>

          {/* Experience */}
          <Box 
            ref={experienceAnimation.ref}
            className={experienceAnimation.isVisible ? 'scroll-animate' : ''}
            sx={{ textAlign: 'center', p: 4 }}
          >
            <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1, color: '#1976d2', fontSize: { xs: '1.75rem', md: '3rem' } }}>
              Experience
            </Typography>
            <Typography variant="h1" sx={{ fontWeight: 'bold', color: '#1976d2', lineHeight: 1 }}>
              1+
            </Typography>
            <Typography variant="h6" sx={{ color: '#666' }}>
              Year of Professional Experience
            </Typography>
          </Box>
        </Box>

      </Container>
    </Box>
  );
};

export default About;
