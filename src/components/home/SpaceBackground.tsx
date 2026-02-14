const SpaceBackground = () => {
  return (
    <div className="space-gradient fixed inset-0 -z-10 pointer-events-none" aria-hidden="true">
      <div className="space-gradient__base absolute inset-0" />
      <div className="space-gradient__glow absolute inset-0" />
    </div>
  );
};

export default SpaceBackground;
