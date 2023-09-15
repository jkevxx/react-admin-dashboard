import { GridColDef } from '@mui/x-data-grid';
import DataTable from '../../components/dataTable/DataTable';
import './users.scss';
import { userRows } from '../../data';

const Users = () => {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'avatar',
      headerName: 'Avatar',
      width: 120,
      renderCell: (params) => (
        <img src={params.row.img || '/noavatar.png'} alt="" />
      ),
    },

    {
      field: 'firstName',
      type: 'string',
      headerName: 'First name',
      width: 150,
    },
    {
      field: 'lastName',
      type: 'string',
      headerName: 'Last name',
      width: 150,
    },
    {
      field: 'email',
      type: 'string',
      headerName: 'Email',
      width: 200,
    },
    {
      field: 'phone',
      type: 'string',
      headerName: 'Phone',
      width: 200,
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      width: 200,
      type: 'string',
    },
    {
      field: 'verified',
      headerName: 'Verified',
      width: 150,
      type: 'boolean',
    },
  ];

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button>Add New User</button>
      </div>
      <DataTable slug={'users'} columns={columns} rows={userRows} />
    </div>
  );
};

export default Users;