'use client';

import useMediaQuery from './hooks/useMediaQuery';
import CardsSection from './components/cardsSection/cardsSection';
import BannerSection from './components/bannerSection/bannerSection';
import HeroSection from './components/heroSection/heroSection';
import Navbar from './components/navbar/navbar';
import SocialSection from './components/socialSection/socialSection';
import styles from './page.module.css';

export default function Home() {
  const labelMap = {
    lblHome: 'Dallas Software Developers',
    lblCommunity: 'Community Impact',
    lblContact: 'Contact Us',
    lblMeetup: 'Meetups',
    lblHero: "You don't have to code alone.",
    lblBanner: 'This website is made BY the community FOR the community',
    lblWorkshopsTitle: 'Technical Workshops',
    lblSupportTitle: 'Community Support',
    lblCohortsTitle: 'Cohorts & Hackathons',
    lblWorkshopsContent:
      'Bringing the community together twice a month around technical topics that allow you to learn and grow your programming skills to be a stronger developer.',
    lblWorkshopsImageUrl: '/assets/technicalWorkshops.png',
    lblWorkshopsImageAlt: 'Technical Workshops',
    lblSupportContent:
      'No matter your level, you have a community that has your back! Dallas Software Developers are focused on supporting our local community while also trying to support the developers who need our help and support!',
    lblSupportImageUrl: '/assets/communitySupport.png',
    lblSupportImageAlt: 'Community Support',
    lblCohortsContent:
      'A 6-week program that is completely free to pair developers working on a project being guided by a developer working in the industry. The focus is to help give you something interesting to showcase in an interview and give you real-world skills!',
    lblCohortsImageUrl: '/assets/cohortsAndHackathons.png',
    lblCohortsImageAlt: 'Cohorts & Hackathons',
    btnTextMeetup: 'Go To A Meetup',
    btnTextCommunity: 'Community Impact',
    btnTextCohort: 'Join Our Cohort',
    meetupUrl: 'https://www.meetup.com/dallas-software-developers-meetup/',
    communityUrl: '/',
    cohortUrl: '/',
    githubUrl: 'https://github.com/dallassoftwaredevelopers',
    discordUrl: '/',
    linkedinUrl: '/',
  };

  const socialData = [
    {
      id: 'github',
      imgSrc: '/assets/githubIcon.png',
      alt: 'Github social icon',
      link: labelMap.githubUrl,
    },
    {
      id: 'discord',
      imgSrc: '/assets/discordIcon.png',
      alt: 'Discord social icon',
      link: labelMap.discordUrl,
    },
    {
      id: 'meetup',
      imgSrc: '/assets/meetupIcon.png',
      alt: 'Meetup social icon',
      link: labelMap.meetupUrl,
    },
    {
      id: 'linkedin',
      imgSrc: '/assets/linkedinIcon.png',
      alt: 'LinkedIn social icon',
      link: labelMap.linkedinUrl,
    },
  ];

  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <main className={styles.main}>
      <Navbar label={labelMap} />
      <HeroSection label={labelMap.lblHero} />
      <BannerSection label={labelMap} />
      <CardsSection label={labelMap} />
      {isDesktop && <SocialSection socialData={socialData} />}
    </main>
  );
}
