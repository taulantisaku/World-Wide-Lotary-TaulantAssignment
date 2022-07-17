import "../User/User.scss";

export interface UserProps {
  user: any;
  isWinner?: boolean;
}

export interface UserType {
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  fullName: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  gender: string;
  cell: string;
  phone: string;
  location: string;
  nat: string;
  isWinner: boolean;
  age: number;
  timesPlayed: number;
  time: string;
  id: number;
}

export const User = ({ user }: UserProps) => {
  const picture = user?.picture.thumbnail;
  const fullName = user?.name;
  const email = user?.email;
  const gender = user?.gender;
  const phone = user?.phone;
  const cell = user?.cell;
  const location = user?.location;
  const nationality = user?.nat;

  return (
    <div className="User">
      <div className="User__Image">
        <img src={picture} alt="" />
      </div>
      <div className="User__Info">
        <ul className="User__Info__FullName">
          <li>Title: {fullName.title}</li>
          <li>First: {fullName.first}</li>
          <li>Last: {fullName.last}</li>
        </ul>
        <p>Email: {email}</p>
        <p>Gender: {gender}</p>
        <div className="User__Info__Phone">
          <p>Phone: {phone}</p>
          <p>Cell: {cell}</p>
        </div>
        <div className="User__Info__Location">
          <p>City: {location.city}</p>
          <p>Country: {location.country}</p>
          <p>Postcode: {location.postcode}</p>
        </div>
        <p>Nationality: {nationality}</p>
      </div>
    </div>
  );
};

export default User;
