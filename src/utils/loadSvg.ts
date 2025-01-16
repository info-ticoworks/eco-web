export const loadSvg = async (svgName: string) => {
  const SvgComponent = await import(`../../public/svg/${svgName}.svg`);
  return SvgComponent.default;
};