<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* themes/preqube/templates/views-view-unformatted--partner_logo--block_1.html.twig */
class __TwigTemplate_db969d94ad8f54793bf6ce344021d7755eb6f2e83083a5543641a290d9a05061 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["for" => 15];
        $filters = ["escape" => 19];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['for'],
                ['escape'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 1
        echo "<!-- Divider -->
                <div class=\"hr5\" style=\"margin-top:60px; margin-bottom:50px;\"></div>
                <div class=\"container\">
                <!-- Start Big Heading -->
                <div class=\"big-title text-center\">
                \t<h1>Our Happy <strong>Clients</strong></h1>
                    <p class=\"title-desc\">Partners We Work With</p>
                </div>
                <!-- End Big Heading -->
                
                <!--Start Clients Carousel-->
                <div class=\"our-clients\">
                \t<div class=\"clients-carousel custom-carousel touch-carousel navigation-3\" data-appeared-items=\"5\" data-navigation=\"true\">
                    \t
\t\t\t\t\t\t";
        // line 15
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["rows"] ?? null));
        $context['loop'] = [
          'parent' => $context['_parent'],
          'index0' => 0,
          'index'  => 1,
          'first'  => true,
        ];
        if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof \Countable)) {
            $length = count($context['_seq']);
            $context['loop']['revindex0'] = $length - 1;
            $context['loop']['revindex'] = $length;
            $context['loop']['length'] = $length;
            $context['loop']['last'] = 1 === $length;
        }
        foreach ($context['_seq'] as $context["_key"] => $context["row"]) {
            // line 16
            echo "\t\t\t\t\t\t\t \t\t\t\t\t\t\t
\t\t\t\t\t\t\t 
\t\t\t\t\t\t\t  
\t\t\t\t\t\t\t ";
            // line 19
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($context["row"], "content", []), "#view", [], "array"), "style_plugin", []), "render_tokens", []), $this->getAttribute($context["loop"], "index0", []), [], "array"), "{{ field_logo }}", [], "array")), "html", null, true);
            echo "

\t\t\t\t\t\t";
            ++$context['loop']['index0'];
            ++$context['loop']['index'];
            $context['loop']['first'] = false;
            if (isset($context['loop']['length'])) {
                --$context['loop']['revindex0'];
                --$context['loop']['revindex'];
                $context['loop']['last'] = 0 === $context['loop']['revindex0'];
            }
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['row'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 22
        echo "\t\t\t\t\t\t
\t\t\t\t\t\t
                        
                    </div>
                </div>
\t\t\t\t</div>
                <!-- Divider -->
                <div class=\"hr5\" style=\"margin-top:25px; margin-bottom:55px;\"></div>";
    }

    public function getTemplateName()
    {
        return "themes/preqube/templates/views-view-unformatted--partner_logo--block_1.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  110 => 22,  93 => 19,  88 => 16,  71 => 15,  55 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "themes/preqube/templates/views-view-unformatted--partner_logo--block_1.html.twig", "/home/prequdzs/public_html/themes/preqube/templates/views-view-unformatted--partner_logo--block_1.html.twig");
    }
}
