import { useEffect, useState } from "react";
import styles from "./userDirectory.module.css";
import type { User } from "./user.model";
import UserDetailModal from "./userDetailModal.component";

function UserDirectoryFeature() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      })
      .then((data: User[]) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load users");
        setLoading(false);
      });
  }, []);

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
  };

  const handleModalClose = () => {
    setSelectedUser(null);
  };

  const handleDeleteUser = (id: number) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <div className={styles.directoryContainer}>
      <div className={styles.tableWrapper}>
        <div className={styles.tableHeader}>
          <div className={styles.headerCell}>Name / Email</div>
          <div className={styles.headerCell}>Address</div>
          <div className={styles.headerCell}>Phone</div>
          <div className={styles.headerCell}>Website</div>
          <div className={styles.headerCell}>Company</div>
          <div className={styles.headerCell}>Action</div>
        </div>
        {users.map((user) => (
          <div className={styles.tableRow} key={user.id}>
            <div
              className={styles.cell}
              onClick={() => handleUserClick(user)}
              tabIndex={0}
              role="button"
            >
              <div className={styles.name}>{user.name}</div>
              <div className={styles.email}>{user.email}</div>
            </div>
            <div
              className={styles.cell}
              onClick={() => handleUserClick(user)}
              tabIndex={0}
              role="button"
            >
              {user.address.street}, {user.address.suite}, {user.address.city},{" "}
              {user.address.zipcode}
            </div>
            <div
              className={styles.cell}
              onClick={() => handleUserClick(user)}
              tabIndex={0}
              role="button"
            >
              {user.phone}
            </div>
            <div
              className={styles.cell}
              onClick={() => handleUserClick(user)}
              tabIndex={0}
              role="button"
            >
              <a
                href={`http://${user.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.websiteLink}
              >
                {user.website}
              </a>
            </div>
            <div
              className={styles.cell}
              onClick={() => handleUserClick(user)}
              tabIndex={0}
              role="button"
            >
              {user.company.name}
            </div>
            <div className={styles.cell}>
              <button
                className={styles.deleteButton}
                onClick={() => handleDeleteUser(user.id)}
                aria-label="Delete user"
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedUser && (
        <UserDetailModal user={selectedUser} onClose={handleModalClose} />
      )}
    </div>
  );
}

export default UserDirectoryFeature;
