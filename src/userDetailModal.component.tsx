import type { User } from "./user.model";
import styles from "./userDetailModal.module.css";

type Props = {
  user: User;
  onClose: () => void;
};

function UserDetailModal({ user, onClose }: Props) {
  const mapUrl = `https://www.google.com/maps?q=${user.address.geo.lat},${user.address.geo.lng}`;
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>
        <div className={styles.title}>{user.name}</div>
        <div className={styles.section}>
          <span>Email:</span> {user.email}
        </div>
        <div className={styles.section}>
          <span>Username:</span> {user.username}
        </div>
        <div className={styles.section}>
          <span>Phone:</span> {user.phone}
        </div>
        <div className={styles.section}>
          <span>Website:</span>{" "}
          <a
            href={`http://${user.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {user.website}
          </a>
        </div>
        <div className={styles.section}>
          <span>Address:</span> {user.address.street}, {user.address.suite},{" "}
          {user.address.city}, {user.address.zipcode}
        </div>
        <div className={styles.section}>
          <span>Company:</span> {user.company.name}
        </div>
        <div className={styles.section}>
          <span>Catch Phrase:</span> {user.company.catchPhrase}
        </div>
        <div className={styles.section}>
          <span>BS:</span> {user.company.bs}
        </div>
        <div className={styles.section}>
          <span>Map:</span>{" "}
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            View on Map
          </a>
        </div>
      </div>
    </div>
  );
}

export default UserDetailModal;
