const router = require('express').Router();

const siteTitle = 'Tech Talk';

router.get('/', async (req,res) => {   
        console.log('home route reached, should call home layout');
        return res.render('home', { 
            siteTitle: siteTitle,
            pageTitle:"Home Page",
        });
    });

router.get('/about', async (req,res) => {   
    console.log('home route reached, should call about layout');
    return res.render('about', {
        siteTitle: siteTitle, 
        pageTitle:"About Page",
    });
});

router.get('/contact', async (req,res) => {   
    console.log('home route reached, should call contact layout');
    return res.render('contact', { 
        siteTitle: siteTitle,
        pageTitle:"Contact Page",
    });
});

router.get('/blog', async (req,res) => {   
    console.log('home route reached, should call blog layout');
    const blogData = await Blog.findAll({raw:true});
    //Blog.findByPk(req.params.id,{raw:true});
    return res.render('blog', { 
        siteTitle: siteTitle,
        pageTitle:"Blog Page",
    });
});


module.exports = router;