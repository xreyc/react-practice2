import { useNavigate } from 'react-router-dom';
import styles from './MainLayout.module.css';

function MainLayout(props) {
    const navigate = useNavigate();

    return (
      <div>
        <div className={styles['main-layout-header']}>
            <div className={styles['main-layout-logo']}>SSI</div>
            <div className={styles['main-layout-menu']}>
                <div onClick={() => navigate("/dashboard")}>Dashboard</div>
                <div onClick={() => navigate("/users")}>User Management</div>
                <div onClick={() => navigate("/products")}>Product Management</div>
            </div>
        </div>
        <div className={styles['main-layout-content']}>
          <div>{props.children}</div>
        </div>
      </div>  
    );
}

export default MainLayout;