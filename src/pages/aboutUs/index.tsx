import cogwheel from "../../assets/images/cogwheel.jpg"
import laptop from "../../assets/images/laptop.jpg"
import Deloitte from "../../assets/images/deloitte-digital.png";
import Erech from "../../assets/images/erechlogo.png";
import Oracle from "../../assets/images/oracle.png";
import BDO from "../../assets/images/bdo.png";
import Obelisk from "../../assets/images/obelisk.png";
import PrimeSec from "../../assets/images/prime-sec.png";
import PWC from "../../assets/images/pwc.png";
import Tadmor from "../../assets/images/tadmor.png";
const partners = [Obelisk, Oracle, PrimeSec, Erech, BDO, Deloitte, Tadmor, PWC]

const About = () => {
  return (
	<div>

	<div className="bg-img">
		<h1>מי אנחנו</h1>
	</div>
	<div className="career-content">
		<div className="career-photos">
			<img className="large-photo" src={cogwheel} />
			<img className="small-photo" src={laptop} />
		</div >
		<div className="text-container" style={{padding:"0 78px 0 0"}}>
			<div className="text-wrapper">
				<div className="career-second-title"><h3 style={{ lineHeight: "1" }}>.Up Capital</h3></div>
				<div className="career-text"><p style={{ marginTop: "0", lineHeight: "1", textAlign: "justify", direction:"rtl"}}> חברת פינ-טק אשר פיתחה טכנולוגיה ייחודית ושירות דיגיטלי חדשני להנגשת אשראי ומימון לעסקים קטנים ובינוניים (MSME) בצורה פשוטה, מהירה והוגנת. הפיתוח הייחודי של החברה שם קץ לכשל שוק ידוע ולראשונה מאפשר לעסקים נגישות להון החוזר הלא מנוצל שלהם אשר עד כה היה "תקוע" ב"שוטף פלוס".</p></div>
				<div className="career-text"><p style={{ marginTop: "0", lineHeight: "1", textAlign: "justify", direction:"rtl" }}>החברה, שהוקמה על-ידי יזמים מנוסים וצוות מומחים בתחומי הטכנולוגיה, האשראי ושוק ההון, שמה לה למטרה לייצר מציאות כלכלית חדשה לעסקים ולחזק את כלכלת ישראל וזאת מתוך הבנה כי של העסקים הקטנים והבינוניים מהווים מנוע צמיחה משמעותי בכלכלה הישראלית ויכולתם לגדול ולהתפתח תשליך על המשק כולו.</p></div>
				<div className="career-text"><p style={{ marginTop: "0", lineHeight: "1", textAlign: "justify", direction:"rtl" }}>תהליך הפיכת ההון הלא מנוצל לזמין מתבצע בלחיצת כפתור אחת, ללא ערבויות וביטחונות אישיים כפי שמקובל בשוק הפיננסי המסורתי ויוצר מצב של WIN-WIN בעבור כל הצדדים.</p></div>
				<div className="career-text"><p style={{ marginTop: "0", lineHeight: "1", textAlign: "justify", direction:"rtl" }}>בנוסף, השילוב של הטכנולוגיה הייחודית לצד הידע וההבנה העמוקה של צוות המומחים בתחום, מאפשר לתפור לכל לקוח "חליפה אישית" המותאמת למידותיו וצרכיו.</p></div>
				<div className="career-text"><p style={{ marginTop: "0", lineHeight: "1", textAlign: "justify", direction:"rtl" }}>Up Capital פועלת יחד עם הפירמות המובילות ובשיתוף פעולה עם מוסדות הפיננסים המרכזיים בישראל ובעולם בתחום ראיית החשבון, המשפט והדיגיטל.</p></div>
				<div className="career-text"><p style={{ marginTop: "0", lineHeight: "1", textAlign: "justify", direction:"rtl" }}><strong>ביחד, ניצור מציאות כלכלית חדשה לעסקים ולכלכלת ישראל.</strong></p></div>
			</div>

		</div>
	</div>
	<div className="partners container">
                <h2 className="partners-title">.השותפים לדרך</h2>
                <div className="images-row">
                    {partners.map(item => (<div className="image" style={{ backgroundImage: `url(${item})` }}></div>))}
                </div>
            </div>
</div>
  )
}

export default About