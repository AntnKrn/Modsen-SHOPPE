export type chooserProps = {
  chooserText: string;
  options: string[];
  onClick(option: string): void;
  state: string;
};
