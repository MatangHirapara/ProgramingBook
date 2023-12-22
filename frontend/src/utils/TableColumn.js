import { Link } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';

export const columns = [
    {
      name: 'ISBN Id',
      selector: row => row.isbn,
      sortable: true,
    },
    {
      name: 'Book-Image',
      selector: row => row.thumbnailUrl ? <img style={{width: '3rem', marginTop: '0.2rem'}} src={row.thumbnailUrl}/> : <CircularProgress color="inherit" />,
    },
    {
      name: 'Book Name',
      selector: row => row.title,
    },
    {
      name: 'Status',
      selector: row => <h3 style={{color: 'green'}}>{row.status}</h3>,
    },
    {
        name: 'Link',
        selector: row => <Link to={`/${row.isbn}`}><button className="visitBtn" style={{color: 'green',padding:'0.5rem 2rem', borderRadius: '0.5rem', border:'none', cursor:'pointer'}}>Visit</button></Link>,
    },
  ];