import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';
import './admin.css';

const API_URL = 'http://localhost:5000/api';

// Dashboard Home
const DashboardHome = ({ token }) => {
  const [stats, setStats] = useState({ total: 0, thisMonth: 0, stats: [], tagStats: [] });
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    fetchStats();
    fetchLeads();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await axios.get(`${API_URL}/leads/stats`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setStats(res.data.data);
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const fetchLeads = async () => {
    try {
      const res = await axios.get(`${API_URL}/leads?limit=5`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setLeads(res.data.data);
    } catch (error) {
      console.error('Error fetching leads:', error);
    }
  };

  const getTagCount = (tag) => {
    const found = stats.tagStats.find(t => t._id === tag);
    return found ? found.count : 0;
  };

  return (
    <div>
      <div className="admin-stats">
        <motion.div
          className="admin-stat-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="admin-stat-header">
            <span className="admin-stat-icon">📊</span>
          </div>
          <div className="admin-stat-value">{stats.total}</div>
          <div className="admin-stat-label">Total Leads</div>
        </motion.div>

        <motion.div
          className="admin-stat-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="admin-stat-header">
            <span className="admin-stat-icon">📅</span>
          </div>
          <div className="admin-stat-value">{stats.thisMonth}</div>
          <div className="admin-stat-label">This Month</div>
        </motion.div>

        <motion.div
          className="admin-stat-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="admin-stat-header">
            <span className="admin-stat-icon">🔥</span>
            <span className="admin-stat-badge hot">Hot</span>
          </div>
          <div className="admin-stat-value">{getTagCount('hot')}</div>
          <div className="admin-stat-label">Hot Leads</div>
        </motion.div>

        <motion.div
          className="admin-stat-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="admin-stat-header">
            <span className="admin-stat-icon">🌡️</span>
            <span className="admin-stat-badge warm">Warm</span>
          </div>
          <div className="admin-stat-value">{getTagCount('warm')}</div>
          <div className="admin-stat-label">Warm Leads</div>
        </motion.div>
      </div>

      <div className="admin-content">
        <div className="admin-content-header">
          <h2>Recent Leads</h2>
          <Link to="/admin/dashboard/leads" className="admin-add-btn">
            View All →
          </Link>
        </div>

        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Business</th>
              <th>Tag</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead._id}>
                <td><strong>{lead.name}</strong></td>
                <td>{lead.email}</td>
                <td>{lead.businessType || '-'}</td>
                <td><span className={`lead-tag ${lead.tag}`}>{lead.tag}</span></td>
                <td><span className="lead-status">{lead.status}</span></td>
                <td>{new Date(lead.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Leads Manager
const LeadsManager = ({ token }) => {
  const [leads, setLeads] = useState([]);
  const [selectedLead, setSelectedLead] = useState(null);
  const [note, setNote] = useState('');

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const res = await axios.get(`${API_URL}/leads`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setLeads(res.data.data);
    } catch (error) {
      console.error('Error fetching leads:', error);
    }
  };

  const updateLead = async (id, data) => {
    try {
      await axios.put(`${API_URL}/leads/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchLeads();
      if (selectedLead?._id === id) {
        setSelectedLead({ ...selectedLead, ...data });
      }
    } catch (error) {
      console.error('Error updating lead:', error);
    }
  };

  const addNote = async () => {
    if (!note.trim() || !selectedLead) return;
    try {
      await axios.post(`${API_URL}/leads/${selectedLead._id}/notes`, { content: note }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setNote('');
      const res = await axios.get(`${API_URL}/leads/${selectedLead._id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setSelectedLead(res.data.data);
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  return (
    <div>
      <div className="admin-content">
        <div className="admin-content-header">
          <h2>Lead Management</h2>
        </div>

        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact</th>
              <th>Business</th>
              <th>Budget</th>
              <th>Tag</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead._id}>
                <td><strong>{lead.name}</strong></td>
                <td>
                  {lead.email}<br/>
                  <small style={{ opacity: 0.6 }}>{lead.phone}</small>
                </td>
                <td>{lead.businessType || '-'}</td>
                <td>{lead.budgetRange?.replace(/-/g, ' ') || '-'}</td>
                <td>
                  <select
                    value={lead.tag}
                    onChange={(e) => updateLead(lead._id, { tag: e.target.value })}
                    className="admin-select"
                    style={{ padding: '6px 10px', fontSize: '0.85rem' }}
                  >
                    <option value="hot">🔥 Hot</option>
                    <option value="warm">🌡️ Warm</option>
                    <option value="cold">❄️ Cold</option>
                  </select>
                </td>
                <td>
                  <select
                    value={lead.status}
                    onChange={(e) => updateLead(lead._id, { status: e.target.value })}
                    className="admin-select"
                    style={{ padding: '6px 10px', fontSize: '0.85rem' }}
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="qualified">Qualified</option>
                    <option value="proposal">Proposal</option>
                    <option value="negotiation">Negotiation</option>
                    <option value="won">Won</option>
                    <option value="lost">Lost</option>
                  </select>
                </td>
                <td>
                  <button
                    className="admin-action-btn view"
                    onClick={() => setSelectedLead(lead)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Lead Detail Modal */}
      <AnimatePresence>
        {selectedLead && (
          <motion.div
            className="admin-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedLead(null)}
          >
            <motion.div
              className="admin-modal"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="admin-modal-header">
                <h2>{selectedLead.name}</h2>
                <button className="admin-modal-close" onClick={() => setSelectedLead(null)}>×</button>
              </div>

              <div className="admin-form-row">
                <div className="admin-form-group">
                  <label>Email</label>
                  <input type="text" value={selectedLead.email} readOnly />
                </div>
                <div className="admin-form-group">
                  <label>Phone</label>
                  <input type="text" value={selectedLead.phone || '-'} readOnly />
                </div>
              </div>

              <div className="admin-form-row">
                <div className="admin-form-group">
                  <label>Company</label>
                  <input type="text" value={selectedLead.company || '-'} readOnly />
                </div>
                <div className="admin-form-group">
                  <label>Business Type</label>
                  <input type="text" value={selectedLead.businessType || '-'} readOnly />
                </div>
              </div>

              <div className="admin-form-row">
                <div className="admin-form-group">
                  <label>Budget</label>
                  <input type="text" value={selectedLead.budgetRange?.replace(/-/g, ' ') || '-'} readOnly />
                </div>
                <div className="admin-form-group">
                  <label>Timeline</label>
                  <input type="text" value={selectedLead.timeline?.replace(/-/g, ' ') || '-'} readOnly />
                </div>
              </div>

              <div className="admin-form-group">
                <label>Goals</label>
                <input type="text" value={selectedLead.goals || '-'} readOnly />
              </div>

              <div className="admin-form-group">
                <label>Message</label>
                <textarea className="admin-textarea" value={selectedLead.message || '-'} readOnly />
              </div>

              <div className="admin-notes">
                <h3>Internal Notes</h3>
                {selectedLead.notes?.map((note, index) => (
                  <div key={index} className="admin-note">
                    <div className="admin-note-header">
                      <span>{note.addedBy?.name || 'Admin'}</span>
                      <span>{new Date(note.addedAt).toLocaleString()}</span>
                    </div>
                    <div className="admin-note-content">{note.content}</div>
                  </div>
                ))}
                <div className="admin-add-note">
                  <input
                    type="text"
                    placeholder="Add a note..."
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                  />
                  <button className="admin-add-btn" onClick={addNote}>Add Note</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Content Manager
const ContentManager = ({ token }) => {
  const [sections, setSections] = useState([]);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const res = await axios.get(`${API_URL}/content`);
      setSections(res.data.data);
    } catch (error) {
      console.error('Error fetching content:', error);
    }
  };

  const updateContent = async (section, data) => {
    try {
      await axios.put(`${API_URL}/content/${section}`, data, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchContent();
      setEditing(null);
    } catch (error) {
      console.error('Error updating content:', error);
    }
  };

  return (
    <div className="admin-content">
      <div className="admin-content-header">
        <h2>Homepage Content</h2>
      </div>

      {['hero', 'philosophy', 'about', 'cta', 'footer'].map((sectionName) => {
        const section = sections.find(s => s.section === sectionName) || {};
        const isEditing = editing === sectionName;

        return (
          <motion.div
            key={sectionName}
            style={{
              background: 'rgba(255, 240, 216, 0.03)',
              border: '1px solid rgba(255, 240, 216, 0.08)',
              borderRadius: '12px',
              padding: '25px',
              marginBottom: '20px'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <h3 style={{ textTransform: 'capitalize' }}>{sectionName} Section</h3>
              <button
                className="admin-action-btn edit"
                onClick={() => setEditing(isEditing ? null : sectionName)}
              >
                {isEditing ? 'Cancel' : 'Edit'}
              </button>
            </div>

            {isEditing ? (
              <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                updateContent(sectionName, Object.fromEntries(formData));
              }}>
                <div className="admin-form-row">
                  <div className="admin-form-group">
                    <label>Title</label>
                    <input name="title" defaultValue={section.title} />
                  </div>
                  <div className="admin-form-group">
                    <label>Subtitle</label>
                    <input name="subtitle" defaultValue={section.subtitle} />
                  </div>
                </div>
                <div className="admin-form-group">
                  <label>Content</label>
                  <textarea name="content" className="admin-textarea" defaultValue={section.content} />
                </div>
                <div className="admin-form-row">
                  <div className="admin-form-group">
                    <label>Tagline</label>
                    <input name="tagline" defaultValue={section.tagline} />
                  </div>
                  <div className="admin-form-group">
                    <label>CTA Text</label>
                    <input name="ctaText" defaultValue={section.ctaText} />
                  </div>
                </div>
                <button type="submit" className="admin-add-btn">Save Changes</button>
              </form>
            ) : (
              <div style={{ opacity: 0.8 }}>
                <p><strong>Title:</strong> {section.title || '-'}</p>
                <p><strong>Subtitle:</strong> {section.subtitle || '-'}</p>
                <p><strong>Content:</strong> {section.content?.substring(0, 100)}...</p>
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

// Services Manager
const ServicesManager = ({ token }) => {
  const [services, setServices] = useState([]);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await axios.get(`${API_URL}/services`);
      setServices(res.data.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  return (
    <div className="admin-content">
      <div className="admin-content-header">
        <h2>Services</h2>
        <button className="admin-add-btn">+ Add Service</button>
      </div>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Icon</th>
            <th>Title</th>
            <th>Description</th>
            <th>Order</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service._id}>
              <td style={{ fontSize: '2rem' }}>{service.icon}</td>
              <td><strong>{service.title}</strong></td>
              <td>{service.shortDescription?.substring(0, 50)}...</td>
              <td>{service.order}</td>
              <td className="admin-table-actions">
                <button className="admin-action-btn edit">Edit</button>
                <button className="admin-action-btn delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Main Dashboard Component
const AdminDashboard = () => {
  const { user, token, logout, loading, isAuthenticated } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate('/admin');
    }
  }, [loading, isAuthenticated, navigate]);

  if (loading) {
    return (
      <div className="admin-login-page">
        <div className="admin-login-logo">प्र-4</div>
      </div>
    );
  }

  if (!isAuthenticated) return null;

  const navItems = [
    { path: '/admin/dashboard', icon: '📊', label: 'Dashboard' },
    { path: '/admin/dashboard/leads', icon: '👥', label: 'Leads' },
    { path: '/admin/dashboard/content', icon: '📝', label: 'Homepage' },
    { path: '/admin/dashboard/services', icon: '⚙️', label: 'Services' },
    { path: '/admin/dashboard/case-studies', icon: '💼', label: 'Case Studies' },
    { path: '/admin/dashboard/testimonials', icon: '💬', label: 'Testimonials' },
    { path: '/admin/dashboard/founders', icon: '👤', label: 'Team' },
    { path: '/admin/dashboard/seo', icon: '🔍', label: 'SEO' }
  ];

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-logo">
          <span>प्र</span> Pracharr
        </div>

        <nav className="admin-nav">
          <div className="admin-nav-section">
            <div className="admin-nav-title">Main</div>
            {navItems.slice(0, 2).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`admin-nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                <span className="icon">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="admin-nav-section">
            <div className="admin-nav-title">Content</div>
            {navItems.slice(2).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`admin-nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                <span className="icon">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </aside>

      <main className="admin-main">
        <div className="admin-header">
          <h1>
            {location.pathname === '/admin/dashboard' && 'Dashboard'}
            {location.pathname === '/admin/dashboard/leads' && 'Lead Management'}
            {location.pathname === '/admin/dashboard/content' && 'Homepage Content'}
            {location.pathname === '/admin/dashboard/services' && 'Services'}
            {location.pathname === '/admin/dashboard/case-studies' && 'Case Studies'}
            {location.pathname === '/admin/dashboard/testimonials' && 'Testimonials'}
            {location.pathname === '/admin/dashboard/founders' && 'Team'}
            {location.pathname === '/admin/dashboard/seo' && 'SEO Settings'}
          </h1>

          <div className="admin-header-actions">
            <div className="admin-user-badge">
              <div className="admin-user-avatar">{user?.name?.charAt(0) || 'A'}</div>
              <span>{user?.name || 'Admin'}</span>
            </div>
            <button className="admin-logout-btn" onClick={logout}>Logout</button>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<DashboardHome token={token} />} />
          <Route path="/leads" element={<LeadsManager token={token} />} />
          <Route path="/content" element={<ContentManager token={token} />} />
          <Route path="/services" element={<ServicesManager token={token} />} />
          <Route path="/case-studies" element={<div className="admin-content"><h2>Case Studies Manager</h2><p style={{opacity: 0.7, marginTop: '20px'}}>Manage your portfolio case studies here.</p></div>} />
          <Route path="/testimonials" element={<div className="admin-content"><h2>Testimonials Manager</h2><p style={{opacity: 0.7, marginTop: '20px'}}>Manage client testimonials here.</p></div>} />
          <Route path="/founders" element={<div className="admin-content"><h2>Team Manager</h2><p style={{opacity: 0.7, marginTop: '20px'}}>Manage founder profiles here.</p></div>} />
          <Route path="/seo" element={<div className="admin-content"><h2>SEO Settings</h2><p style={{opacity: 0.7, marginTop: '20px'}}>Manage meta tags and SEO settings here.</p></div>} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminDashboard;
