export type colorCard = 'purplePink' | 'redOrange' | 'blueCyan' | 'greenMint' ;
export type IconCatalog = 'fa-star-and-crescent' | 'fa-skull' | 'fa-bolt' | 'fa-staff-snake' ;
export type IconColor = 'star' | 'skull' | 'snake';


export type SpellCard = {
  label: string;
  colorbg: colorCard;
  icon: IconCatalog;
  iconColor: IconColor;
}