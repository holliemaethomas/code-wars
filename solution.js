function abbrevName(name) {
  name = name.toUpperCase();
  const fullName = name.split(' ');
  const firstInitial = fullName[0][0];
  const secondInitial = fullName[1][0];
  return firstInitial + '.' + secondInitial 