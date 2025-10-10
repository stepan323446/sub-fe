interface NavLink {
  content: string;
  to: string;
}

export interface SettingsNavSection {
  title: string;
  links: NavLink[];
}
