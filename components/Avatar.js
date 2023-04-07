function Avatar({ url }) {
    return (
      <img
        className="h-10 w-10 rounded-full cursor-pointer object-cover transition-transform duration-300 hover:scale-110"
        loading="lazy"
        src={url}
        alt="avatar"
        style={{ objectPosition: 'center', borderRadius: '50%' }}
      />
    );
  }
  
  export default Avatar;
  