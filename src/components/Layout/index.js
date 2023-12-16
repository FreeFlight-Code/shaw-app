function Layout({ children }) {
  return (
    <div className='layout'>
      <div className='page'>{children}</div>
    </div>
  );
}

export default Layout;
