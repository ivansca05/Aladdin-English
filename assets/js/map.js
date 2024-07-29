document.addEventListener("DOMContentLoaded", () =>{

    setTimeout(()=>{
        document.querySelector("#load-iframe-map").innerHTML = `
        <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.98752441987!2d-76.5043874!3d3.3531941999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a1b2eeb9ab09%3A0x5231f5f1ce9bd449!2sCarrera%20119A%20%2360B%20-%2075%2C%20Villa%20Fatima%2C%20Cali%2C%20Valle%20del%20Cauca%2C%20Colombia!5e0!3m2!1ses-419!2scl!4v1721933727565!5m2!1ses-419!2scl"></iframe>
        `;
    }, 500);
});