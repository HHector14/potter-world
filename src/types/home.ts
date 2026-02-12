export type ColorPallet = 'purplePink' | 'redOrange' | 'blueCyan' | 'greenMint' ;
export type IconCatalog = 'fa-people-group' | 'fa-house' | 'fa-magic' | 'fa-book' ;

export type CardInfo = {
  colorbg: ColorPallet;
  title: string;
  description: string;
  icon?: IconCatalog;
}

export type MiniCardInfo = {
  colorTitle: string;
  title: string;
  text: string;
}