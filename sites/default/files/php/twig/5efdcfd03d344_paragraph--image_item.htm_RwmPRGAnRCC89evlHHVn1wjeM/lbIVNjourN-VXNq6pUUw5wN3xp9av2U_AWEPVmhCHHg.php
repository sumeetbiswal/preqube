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

/* themes/preqube/templates/paragraph--image_item.html.twig */
class __TwigTemplate_12dd43cdd5ebad252de12bbc1394dd489ac2ef9214962e86e4bdb508ca5ef13f extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
            'paragraph' => [$this, 'block_paragraph'],
            'content' => [$this, 'block_content'],
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["set" => 3, "block" => 9];
        $filters = ["clean_class" => 5, "escape" => 14];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['set', 'block'],
                ['clean_class', 'escape'],
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
        echo "
";
        // line 3
        $context["classes"] = [0 => "paragraph", 1 => ("paragraph--type--" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed($this->getAttribute(        // line 5
($context["paragraph"] ?? null), "bundle", [])))), 2 => ((        // line 6
($context["view_mode"] ?? null)) ? (("paragraph--view-mode--" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(($context["view_mode"] ?? null))))) : (""))];
        // line 9
        $this->displayBlock('paragraph', $context, $blocks);
        // line 21
        echo "
";
    }

    // line 9
    public function block_paragraph($context, array $blocks = [])
    {
        // line 10
        echo "
    ";
        // line 11
        $this->displayBlock('content', $context, $blocks);
        // line 19
        echo "  
";
    }

    // line 11
    public function block_content($context, array $blocks = [])
    {
        // line 12
        echo "\t\t\t\t<div class=\"col-md-6\">
\t\t\t\t\t<div>
\t\t\t\t\t\t<div class=\"item\">";
        // line 14
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_image", [])), "html", null, true);
        echo "</div>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t
    ";
    }

    public function getTemplateName()
    {
        return "themes/preqube/templates/paragraph--image_item.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  91 => 14,  87 => 12,  84 => 11,  79 => 19,  77 => 11,  74 => 10,  71 => 9,  66 => 21,  64 => 9,  62 => 6,  61 => 5,  60 => 3,  57 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "themes/preqube/templates/paragraph--image_item.html.twig", "/home/prequdzs/public_html/themes/preqube/templates/paragraph--image_item.html.twig");
    }
}
