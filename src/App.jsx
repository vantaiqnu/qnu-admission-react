import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Files from './pages/Files'
import Upload from './pages/Upload'
import Warnings from './pages/Warnings'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'

export default function App(){
  const [page,setPage]=useState('overview'); const [mobileOpen,setMobileOpen]=useState(false); const [files,setFiles]=useState([])
  const [authenticated,setAuthenticated]=useState(false); const [pendingAuth,setPendingAuth]=useState(null); const [authNotice,setAuthNotice]=useState('')
  const addFiles=(rawFiles,type)=>setFiles(prev=>[...prev,...rawFiles.map((f,i)=>({id:`${Date.now()}-${i}-${f.name}`,name:f.name,size:f.size,type,status:'Đang xử lý'}))])
  const navigate=id=>{setPage(id);setMobileOpen(false)}
  const goHome=()=>{setPendingAuth(null);setAuthNotice('');navigate('overview')}
  const showAuth=mode=>{if(page!=='login'&&page!=='register')setPendingAuth({page,operation:null});setPage(mode);setMobileOpen(false)}
  const requireAuth=operation=>{if(authenticated)return true;setPendingAuth({page,operation});setPage('login');setMobileOpen(false);return false}
  const completeDemoLogin=()=>{
    const destination=pendingAuth?.page||'overview'
    const notices={upload:'Đăng nhập demo thành công. Hãy chọn lại tệp và nhấn Tiếp nhận hồ sơ để tiếp tục.',approve:'Đăng nhập demo thành công. Thao tác chưa được tự thực hiện; hãy nhấn Phê duyệt hồ sơ để tiếp tục.',supplement:'Đăng nhập demo thành công. Thao tác chưa được tự thực hiện; hãy nhấn Yêu cầu bổ sung để tiếp tục.'}
    setAuthenticated(true);setPendingAuth(null);setAuthNotice(notices[pendingAuth?.operation]||'Phiên đăng nhập demo đang hoạt động trong bộ nhớ của trang này.');setPage(destination)
  }
  const logout=()=>{
    setAuthenticated(false);setPendingAuth(null);setAuthNotice('Phiên demo đã được đăng xuất.')
  }
  if(page==='login')return <div className="auth-page"><Login onSuccess={completeDemoLogin} onSwitch={setPage} onHome={goHome} pendingOperation={pendingAuth?.operation}/></div>
  if(page==='register')return <div className="auth-page"><Register onSwitch={setPage} onHome={goHome}/></div>
  let content
  if(page==='overview') content=<Dashboard files={files} setPage={navigate}/>
  if(page==='files') content=<Files files={files}/>
  if(page==='upload') content=<Upload addFiles={addFiles} setPage={navigate} onRequireAuth={requireAuth}/>
  if(page==='warnings') content=<Warnings/>
  if(page==='profile') content=<Profile/>
  return <div className="app-shell"><div className={`sidebar-wrap ${mobileOpen?'open':''}`} onClick={()=>setMobileOpen(false)}><div onClick={e=>e.stopPropagation()}><Sidebar page={page} setPage={navigate} onLogin={()=>showAuth('login')} onRegister={()=>showAuth('register')} onLogout={logout} authenticated={authenticated}/></div></div><div className="main"><Header setMobileOpen={setMobileOpen}/><main className="content">{authNotice&&<div className="auth-return-notice" role="status"><span>{authNotice}</span><button type="button" onClick={()=>setAuthNotice('')} aria-label="Đóng thông báo">×</button></div>}{content}<footer>QNU Admission • ReactJS</footer></main></div></div>
}
