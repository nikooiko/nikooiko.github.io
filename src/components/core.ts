// workaround to cheat images import at Typescript files
declare module "*.jpg" {
  const value: any;
  export = value;
}
