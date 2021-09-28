import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from '../../store/modules/user/actions';
import './styles.css';

const UserCard = () => {
  const [newName, setNewName] = useState('');
  const dispatch = useDispatch();
  const name = useSelector((state) => state.user);

  const handleClick = () => {
    dispatch(changeName(newName));
    console.log(name);
  };
  return (
    <div className="userCard">
      <p>Nome: {name}</p>
      <input type="text" onChange={(e) => setNewName(e.target.value)} />
      <button onClick={handleClick}>Change</button>
    </div>
  );
};

export default UserCard;
