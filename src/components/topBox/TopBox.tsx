import './topBox.scss';
import { topDealUsers } from '../../data';

const TopBox = () => {
  return (
    <div className="topBox">
      <div className="list">
        <h1>Top Deals</h1>
        {topDealUsers.map((user) => (
          <div className="listItem" key={user.id}>
            <div className="user">
              <img src={user.img} alt="" />
              <div className="userText">
                <span className="username">{user.username}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <div className="amount">{user.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
