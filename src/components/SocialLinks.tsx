import { Github, Linkedin, Twitter } from 'lucide-react';
import {profile} from '@/data/portfolio'

export const socials = [
    { icon: Github, href: profile.social.github, label: 'GitHub', show: profile.social.github.trim() !== "" },
    { icon: Linkedin, href: profile.social.linkedin, label: 'LinkedIn', show: profile.social.linkedin.trim() !== "" },
    { icon: Twitter, href: profile.social.twitter, label: 'Twitter', show: profile.social.twitter.trim() !== "" },
  ];