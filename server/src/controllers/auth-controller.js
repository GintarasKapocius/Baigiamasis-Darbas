import database from '../database/index.js';
import { createToken } from '../helpers/token-helpers.js';
import UserViewModel from '../view-models/user-view-model.js';

export const login = (req, res) => {
  const { email, password } = req.body;
  const { users } = database.data;

  const foundUser = users.find(x => x.email === email);

  if (!foundUser) {
    // Nerastas Vartotojas
    res.status(404).json({
      message: 'Vartotojas su tokiu paštu nerastas'
    });
    return;
  }

  if (foundUser.password === password) {
    res.status(200).json({
      user: new UserViewModel(foundUser),
      token: createToken({ email, role: foundUser.role }),
    });
    return;
  }
  // Neteisingas slaptažodis
  res.status(400).json({
    message: 'Neteisingas slaptažodis'
  });
};

export const checkEmail = (req, res) => {
  const { email } = req.query;
  const emailIsTaken = Boolean(database.data.users.find(x => x.email === email));
  if (emailIsTaken) {
    res.status(200).json({
      available: false,
      message: 'Vartotojas su tokiu paštu jau egzistuoja'
    });
  } else {
    res.status(200).json({
      available: true,
      message: 'Vartotojas galimas'
    });
  }
}