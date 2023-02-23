import axios from "axios";
import { useQuery } from "react-query";

const fetchUserData = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};

const fetchChannelData = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`);
};

const DependentQueriesPage = ({ email }) => {
  const user = useQuery(["user", email], () => fetchUserData(email));

  const channelId = user?.data?.data.channelId;
  console.log("channelId ", channelId);

  const channel = useQuery(["channel", channelId], () =>
    fetchChannelData(channelId)
  );

  console.log({
    isLoading: user?.data?.isLoading,
    isFetching: user?.data?.isFetching,
    isError: user?.data?.isError,
  });
  console.log(user?.data?.data, user?.data?.error);

  console.log({
    isLoading: channel?.data?.isLoading,
    isFetching: channel?.data?.isFetching,
    isError: channel?.data?.isError,
  });
  console.log(channel?.data?.data, channel?.data?.error);

  if (user?.data?.isError) {
    return <h2>{user?.data?.error}</h2>;
  }
  if (channel?.data?.isError) {
    return <h2>{channel?.data?.error}</h2>;
  }
  if (
    user?.data?.isLoading ||
    user?.data?.isFetching ||
    channel?.data?.isLoading ||
    channel?.data?.isFetching
  ) {
    return <h2>...Loading</h2>;
  }

  return (
    <div>
      {channel?.data?.data?.courses.map((chnl) => (
        <div key={chnl}>{chnl}</div>
      ))}
    </div>
  );
};

export default DependentQueriesPage;
