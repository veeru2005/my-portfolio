import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Chip,
  Dialog,
  IconButton,
  Divider,
  Button,
} from '@mui/material';
import {
  Launch as LaunchIcon,
  Close as CloseIcon,
  ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';
import { ScrollScatter } from '../ui/ScrollScatter';
import { useThemeColors } from '../../hooks/useThemeColors';
import { getCloudinaryImageUrl, getCloudinarySrcSet } from '../../lib/cloudinary';

interface CaseStudy {
  problem: string;
  approach: string;
  techDecisions: string[];
  outcome: string;
  metrics: { label: string; value: string }[];
}

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string;
  liveUrl: string;
  githubUrl: string;
  caseStudy: CaseStudy;
}
const STATIC_PROJECTS: Project[] = [
  {
    id: 4,
    title: 'Serverless Team Chat (AWS)',
    description: 'Built a fully serverless real-time chat application using AWS Lambda, API Gateway WebSocket, DynamoDB, and Cognito. Implemented secure JWT authentication and scalable real-time messaging architecture without managing servers.',
    imageUrl: 'https://res.cloudinary.com/dpff7l6hb/image/upload/v1779559542/AWS_hpdr93.png', // Fallback image since none provided
    technologies: 'AWS Lambda, API Gateway, DynamoDB, Cognito, React, TypeScript',
    liveUrl: '',
    githubUrl: '#',
    caseStudy: {
      problem: 'Traditional WebSocket servers require constant provisioning, scaling, and maintenance. We needed a highly scalable, real-time messaging architecture that incurs zero costs when idle and scales infinitely without managing servers.',
      approach: 'Leveraged AWS API Gateway WebSockets integrated with AWS Lambda for message routing. Used DynamoDB for fast, scalable message persistence and AWS Cognito for secure JWT authentication. Designed the frontend with React and TypeScript.',
      techDecisions: [
        'API Gateway WebSocket for managed persistent connections',
        'DynamoDB for single-digit millisecond latency message retrieval',
        'Cognito for seamless and secure user identity management',
        'React & TypeScript for a robust, type-safe client interface',
      ],
      outcome: 'Successfully deployed a real-time chat architecture that scales automatically with user load and costs virtually nothing during idle periods.',
      metrics: [
        { label: 'Infrastructure', value: '100% Serverless' },
        { label: 'Latency', value: '< 50ms' },
        { label: 'Uptime', value: '99.99%' },
        { label: 'Scalability', value: 'Infinite' },
      ],
    },
  },
  {
    id: 3,
    title: 'Fresco Organic',
    description:
      'An e-commerce website for a pure organic fruits and groceries selling platform. Features a custom coupons system for user discounts and supports exclusively Cash on Delivery (COD) based on client requirements.',
    imageUrl:
      'https://res.cloudinary.com/dpff7l6hb/image/upload/v1776618413/3_bbs0bf.png',
    technologies: 'React, Node.js, MongoDB, Better Auth',
    liveUrl: 'https://frescoo.tech/',
    githubUrl: '#',
    caseStudy: {
      problem:
        'A local organic grocery store needed an online presence to reach more customers beyond their physical location. They required a simple ordering system with Cash on Delivery only — no complex payment gateway integration — and a custom coupon engine to drive repeat purchases.',
      approach:
        'Built a full-stack MERN application with a focus on mobile-first responsive design. Implemented a custom coupon management system in the admin dashboard that allows the owner to create, edit, and expire discount codes. Used Better Auth for secure user authentication and session management.',
      techDecisions: [
        'Chose MongoDB for flexible product schema — organic inventory changes frequently',
        'Built a custom coupon engine instead of using third-party services to avoid monthly costs',
        'Implemented COD-only checkout flow to match the client\'s local delivery model',
        'Used Cloudinary for product image management to keep hosting costs low',
      ],
      outcome:
        'Successfully launched and currently serving real customers. The client reports a noticeable increase in orders from areas previously unreachable by word-of-mouth alone.',
      metrics: [
        { label: 'Active Users', value: '150+' },
        { label: 'Products Listed', value: '80+' },
        { label: 'Avg Load Time', value: '1.8s' },
        { label: 'Order Completion', value: '92%' },
      ],
    },
  },
  {
    id: 2,
    title: 'KLU-ESPORTS Platform',
    description:
      "Built and deployed the official KLU E-Sports website serving 300+ students for tournaments, registrations, and club activities. Automated deployment using a GitHub Actions CI/CD pipeline and developed a team-based registration system.",
    imageUrl:
      'https://res.cloudinary.com/dpff7l6hb/image/upload/v1776617167/1_fcqffj.png',
    technologies: 'React, Node.js, MongoDB, Tailwind CSS, GitHub Actions',
    liveUrl: 'https://kluesports.in',
    githubUrl: '#',
    caseStudy: {
      problem:
        'The KLU E-Sports club managed registrations via Google Forms, leading to chaos. They needed a centralized platform for event management and a team-based registration system using university member email IDs.',
      approach:
        'Designed a team-leader registration system where captains add members via email IDs, eliminating duplicates. Automated the deployment using a GitHub Actions CI/CD pipeline for seamless updates.',
      techDecisions: [
        'GitHub Actions for automated CI/CD deployment pipeline',
        'Email-based team lookup reduces manual data entry',
        'React and Tailwind CSS for a modern gaming aesthetic',
        'MongoDB for flexible document storage of teams and events',
      ],
      outcome:
        'Adopted as the official platform, successfully serving 300+ students. Reduced registration time drastically and streamlined tournament brackets.',
      metrics: [
        { label: 'Students Served', value: '300+' },
        { label: 'Deployment', value: 'CI/CD Automated' },
        { label: 'Events', value: 'Live tracking' },
        { label: 'Tech Stack', value: 'MERN' },
      ],
    },
  },
  {
    id: 1,
    title: 'VIDHURA AI & Data Science Club',
    description:
      'Where creativity meets technology. VIDHURA unites thinkers and creators to push AI and data science boundaries through projects, collaboration, and research.',
    imageUrl:
      'https://res.cloudinary.com/dpff7l6hb/image/upload/v1760550280/lwcnwbbx9ep8j3y4lrrg.png',
    technologies: 'React, Node.js, MongoDB, Cloudinary',
    liveUrl: 'https://vidhura-klu.tech/',
    githubUrl: '#',
    caseStudy: {
      problem:
        'VIDHURA, KLU\'s AI & Data Science club, lacked an online identity. Club activities, member achievements, and event announcements were scattered across social media with no central repository. New students had difficulty discovering the club or understanding its mission.',
      approach:
        'Created a modern, content-driven website with sections for events, team members, research projects, and a blog. Used Cloudinary for media management and MongoDB for dynamic content that club admins can update without code changes.',
      techDecisions: [
        'Component-based architecture allows easy addition of new sections as the club grows',
        'Cloudinary integration for optimized image delivery — critical for event galleries',
        'MongoDB-backed CMS-like admin panel for non-technical club coordinators',
        'SEO-optimized pages to help the club appear in university-related searches',
      ],
      outcome:
        'Became the official web presence for VIDHURA. Increased club visibility and helped drive 40% more applications during the next recruitment cycle.',
      metrics: [
        { label: 'Monthly Visitors', value: '300+' },
        { label: 'Club Applications', value: '+40%' },
        { label: 'Pages', value: '12+' },
        { label: 'Media Assets', value: '50+' },
      ],
    },
  },
];

const PROJECT_IMAGE_WIDTHS = [320, 480, 640, 800];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const c = useThemeColors();

  const getCardTransform = (index: number) => {
    const col = index % 3;
    if (col === 0) return 'perspective(1000px) rotateY(8deg) rotateX(3deg)';
    if (col === 1) return 'perspective(1000px) rotateY(0deg) rotateX(3deg)';
    return 'perspective(1000px) rotateY(-8deg) rotateX(3deg)';
  };

  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 5, md: 6 },
        position: 'relative',
        background: c.sectionBgAlt,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.34,
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <ScrollScatter direction="up" distance={100}>
          <Box>
            <Typography
              sx={{
                color: '#ff9f1a',
                textTransform: 'uppercase',
                letterSpacing: '0.11em',
                fontSize: '0.72rem',
                fontWeight: 700,
                textAlign: 'center',
                mb: 1,
              }}
            >
              Featured Work
            </Typography>

            <Typography
              variant="h3"
              align="center"
              fontWeight={800}
              sx={{ mb: 1.4, color: c.textPrimary }}
            >
              Projects
            </Typography>
            <Typography
              align="center"
              sx={{ mb: 5, maxWidth: 650, mx: 'auto', color: c.textSecondary }}
            >
              Production-style builds where design clarity, feature depth, and
              clean engineering come together.
            </Typography>
          </Box>
        </ScrollScatter>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
              lg: '1fr 1fr 1fr',
            },
            gap: { xs: 3, sm: 4, md: 5 },
          }}
        >
          {[...STATIC_PROJECTS]
            .sort((a, b) => b.id - a.id)
            .map((project, index) => {
              const optimizedImage = getCloudinaryImageUrl(project.imageUrl, 640);
              const srcSet = getCloudinarySrcSet(project.imageUrl, PROJECT_IMAGE_WIDTHS);

              return (
                <ScrollScatter
                  key={project.id}
                  direction={
                    index % 3 === 0
                      ? 'left'
                      : index % 3 === 1
                      ? 'up'
                      : 'right'
                  }
                  distance={200}
                >
                  <Box sx={{ height: '100%' }}>
                    <Card
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: '16px',
                        border: `1px solid ${c.accent}`,
                        background: c.cardBg,
                        p: { xs: 1.5, md: 2 },
                        boxShadow: c.cardShadow,
                        transform: { md: getCardTransform(index) },
                        transition:
                          'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                        '&:hover': {
                          transform: {
                            md: 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(-6px)',
                          },
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src={optimizedImage}
                        srcSet={srcSet}
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        width={340}
                        height={220}
                        onError={(e: any) => {
                          e.currentTarget.src = '/placeholder.svg';
                        }}
                        sx={{
                          width: '100%',
                          height: 220,
                          objectFit: 'cover',
                          borderRadius: '12px',
                          borderBottom: '1px solid rgba(255,255,255,0.1)',
                        }}
                      />

                      <CardContent sx={{ flexGrow: 1, p: 2, px: 1 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            color: '#eef2ff',
                            mb: 1.1,
                            lineHeight: 1.3,
                          }}
                        >
                          {project.title}
                        </Typography>

                        <Typography
                          variant="body2"
                          sx={{
                            color: '#a8b3ca',
                            mb: 2.3,
                            lineHeight: 1.75,
                          }}
                        >
                          {project.description}
                        </Typography>

                        <Box>
                          {project.technologies
                            .split(',')
                            .map(
                              (tech) =>
                                tech.trim() && (
                                  <Chip
                                    key={tech}
                                    label={tech.trim()}
                                    size="small"
                                    sx={{
                                      mr: 0.8,
                                      mb: 0.8,
                                      bgcolor: 'rgba(255,159,26,0.16)',
                                      color: '#ff9f1a',
                                      border: 'none',
                                      fontWeight: 600,
                                      fontSize: '0.75rem',
                                      borderRadius: '6px',
                                      px: 0.5,
                                    }}
                                  />
                                )
                            )}
                        </Box>
                      </CardContent>

                      <Box sx={{ px: 2, pb: 2, pt: 0, display: 'flex', justifyContent: project.liveUrl ? 'space-between' : 'flex-end', alignItems: 'center' }}>
                        {project.liveUrl && (
                          <Chip
                            component="a"
                            href={project.liveUrl}
                            target="_blank"
                            icon={<LaunchIcon sx={{ fontSize: 16, color: '#1a1205 !important' }} />}
                            label="Live Demo"
                            clickable
                            sx={{
                              bgcolor: '#ff9f1a',
                              color: '#1a1205',
                              fontWeight: 700,
                              fontSize: '0.8rem',
                              '&:hover': { bgcolor: '#ffab33' },
                            }}
                          />
                        )}
                        <Chip
                          label="Case Study"
                          clickable
                          onClick={() => setSelectedProject(project)}
                          deleteIcon={<ArrowForwardIcon sx={{ fontSize: 16, color: '#ff9f1a !important' }} />}
                          onDelete={() => setSelectedProject(project)}
                          sx={{
                            bgcolor: 'rgba(255,159,26,0.12)',
                            color: '#ff9f1a',
                            fontWeight: 700,
                            fontSize: '0.8rem',
                            border: '1px solid rgba(255,159,26,0.3)',
                            '&:hover': {
                              bgcolor: 'rgba(255,159,26,0.22)',
                            },
                            '& .MuiChip-deleteIcon': {
                              color: '#ff9f1a',
                              '&:hover': { color: '#ffb94d' },
                            },
                          }}
                        />
                      </Box>
                    </Card>
                  </Box>
                </ScrollScatter>
              );
            })}
        </Box>
      </Container>

      {/* Case Study Modal */}
      <Dialog
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '16px',
            border: '1px solid #ff9f1a',
            background: 'linear-gradient(160deg, rgba(12,17,28,0.98), rgba(9,12,19,0.98))',
            backdropFilter: 'blur(20px)',
            maxHeight: '85vh',
            mx: { xs: 1, sm: 2 },
            my: { xs: 1.5, sm: 3 },
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            overscrollBehavior: 'none',
          },
        }}
      >
        {selectedProject && (
          <>
            {/* Fixed Header */}
            <Box sx={{ 
              p: { xs: 1.5, sm: 2, md: 3 }, 
              pb: { xs: 1.2, sm: 1.5, md: 2 },
              borderBottom: '1px solid rgba(255,255,255,0.15)',
              bgcolor: 'rgb(12, 17, 28)',
              flexShrink: 0,
              zIndex: 10
            }}>
              <Typography sx={{ color: '#ff9f1a', fontWeight: 700, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', mb: 0.5 }}>
                Case Study
              </Typography>
              <Typography variant="h4" sx={{ color: '#f4f7ff', fontWeight: 800, pr: { xs: 0, sm: 4 }, fontSize: { xs: '1.25rem', sm: '1.75rem' } }}>
                {selectedProject.title}
              </Typography>
            </Box>

            {/* Scrollable Content */}
            <Box sx={{ p: { xs: 1.5, sm: 3, md: 4 }, flex: 1, overflowY: 'auto', overscrollBehavior: 'contain' }}>

            {/* Metrics Row */}
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: { xs: 0.8, sm: 1.5 }, mb: 4 }}>
              {selectedProject.caseStudy.metrics.map((m) => (
                <Box
                  key={m.label}
                  sx={{
                    p: { xs: 1.6, sm: 2 },
                    borderRadius: '12px',
                    bgcolor: 'rgba(255,159,26,0.08)',
                    border: '1px solid rgba(255,159,26,0.25)',
                    textAlign: 'center',
                    minWidth: 0,
                  }}
                >
                  <Typography sx={{ color: '#ff9f1a', fontWeight: 800, fontSize: { xs: '1.1rem', md: '1.4rem' }, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {m.value}
                  </Typography>
                  <Typography sx={{ color: '#9faaC3', fontSize: { xs: '0.65rem', md: '0.75rem' }, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {m.label}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Problem */}
            <Box sx={{ mb: 3 }}>
              <Typography sx={{ color: '#ff9f1a', fontWeight: 700, fontSize: '0.85rem', mb: 1, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                🔍 The Problem
              </Typography>
              <Typography sx={{ color: '#c2cbdf', lineHeight: 1.85 }}>
                {selectedProject.caseStudy.problem}
              </Typography>
            </Box>

            <Divider sx={{ bgcolor: 'rgba(255,255,255,0.06)', my: 2 }} />

            {/* Approach */}
            <Box sx={{ mb: 3 }}>
              <Typography sx={{ color: '#ff9f1a', fontWeight: 700, fontSize: '0.85rem', mb: 1, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                🛠 My Approach
              </Typography>
              <Typography sx={{ color: '#c2cbdf', lineHeight: 1.85 }}>
                {selectedProject.caseStudy.approach}
              </Typography>
            </Box>

            <Divider sx={{ bgcolor: 'rgba(255,255,255,0.06)', my: 2 }} />

            {/* Technical Decisions */}
            <Box sx={{ mb: 3 }}>
              <Typography sx={{ color: '#ff9f1a', fontWeight: 700, fontSize: '0.85rem', mb: 1.5, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                ⚡ Technical Decisions
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
                {selectedProject.caseStudy.techDecisions.map((decision, i) => (
                  <Box key={i} sx={{ display: 'flex', gap: 1.2, alignItems: 'flex-start' }}>
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        bgcolor: '#ff9f1a',
                        mt: '8px',
                        flexShrink: 0,
                      }}
                    />
                    <Typography sx={{ color: '#c2cbdf', lineHeight: 1.75 }}>
                      {decision}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            <Divider sx={{ bgcolor: 'rgba(255,255,255,0.06)', my: 2 }} />

            {/* Outcome */}
            <Box
              sx={{
                p: 2.5,
                borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(255,159,26,0.12), rgba(255,159,26,0.06))',
                border: '1px solid rgba(255,159,26,0.3)',
                mb: 4,
              }}
            >
              <Typography sx={{ color: '#ff9f1a', fontWeight: 700, fontSize: '0.85rem', mb: 1, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                🎯 Outcome
              </Typography>
              <Typography sx={{ color: '#dbe3f5', lineHeight: 1.85 }}>
                {selectedProject.caseStudy.outcome}
              </Typography>
            </Box>
            </Box>

            <Box sx={{ 
              p: { xs: 1.2, sm: 2 }, 
              borderTop: '1px solid rgba(255,255,255,0.15)', 
              bgcolor: 'rgb(12, 17, 28)',
              mt: 'auto',
              flexShrink: 0,
              zIndex: 10
            }}>
              <Button
                fullWidth
                variant="contained"
                onClick={() => setSelectedProject(null)}
                sx={{
                  bgcolor: '#ff9f1a',
                  color: '#090c13',
                  py: 1,
                  fontWeight: 700,
                  borderRadius: '10px',
                  textTransform: 'none',
                  fontSize: '0.9rem',
                  '&:hover': {
                    bgcolor: '#ffb044',
                  }
                }}
              >
                Close
              </Button>
            </Box>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default Projects;
