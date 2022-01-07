function setTimeLoader(setLoading) {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 2000);
  return () => clearTimeout(timer);
}

export { setTimeLoader };
